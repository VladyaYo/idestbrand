import React,  {useState} from "react";
import {useRouter} from "next/router";
import {Form, Input, Modal, Button} from "antd";
import { toast } from 'react-toastify';
import ru from "../public/locales/ru";
import ua from "../public/locales/ua";
import en from "../public/locales/en";


const CommercialFormBlock = () => {

    const router = useRouter();
    const {locale} = router;
    let t ;
    switch (locale) {
        case "ru-RU":
            t = ru;
            break;
        case "uk-UA":
            t = ua;
            break;
        default:
            t = en;
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        // console.log(title, 'title');
        setIsModalVisible(true);
        // setSelectedVacancyTitle(title);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const submitHandler = async (values) => {
        // console.log (values, 'values')
        const botToken = `${process.env.NEXT_PUBLIC_STRAPI_TG_BOT_TOKEN}`;

        const chatId = `${process.env.NEXT_PUBLIC_STRAPI_TG_CHAT_ID}`;
    
        const message = `
        Cooperation form
        Name: ${values.username}
        Phone: ${values.phone}
        Email: ${values.email}
        Company: ${values.company}
        Message: ${values.message}
        `;
    
        try {
            // Send form data message to Telegram
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });
            toast.success("Form Success");
        } catch (err) {
            console.log(err);
            toast.error("Form Submission Failed");
        } finally {
            setIsModalVisible(false);
        }
    };

    return (
        <>
        <Modal
                wrapClassName="modalVacancies"
                open={isModalVisible}
                onOk={handleOk}
                footer={[]}
                onCancel={handleCancel}
            >
                <h4>{t.applyForCooperation}</h4>
                <Form
                    name="pply Cooperation"
                    initialValues={{ remember: true }}
                    onFinish={submitHandler}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: `${t.attentionName}` }]}
                    >
                        <Input placeholder={t.yourName + "*"}/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{
                            type: 'email',
                            required: true,
                            message: `${t.attentionEmail}`
                        }]}
                    >
                        <Input placeholder="Email*" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: `${t.attentionPhone}` }]}
                    >
                        <Input placeholder={t.Phone + "*"} />
                    </Form.Item>
                    <Form.Item name="company">
                        <Input placeholder={t.companyName} />
                    </Form.Item>
                    <Form.Item name="message">
                        <Input.TextArea placeholder={t.howCanWeBeUseful}/>
                    </Form.Item>
                    <Form.Item >
                        <Button className="submit" type="primary" htmlType="submit">
                            {t.Send}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <section className="comercialFormBlock commercialProposal formsLinks">
                <div className="container">
                    <div className="links">
                        <button onClick={showModal} className="textButton">
                        {t.applyForCooperation}
                        </button>
                    </div>
                </div>
            </section>
            </>
    );
};

export default CommercialFormBlock;