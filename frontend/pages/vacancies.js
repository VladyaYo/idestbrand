import React, {useState} from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {fetchAPI} from "../lib/api";
import VacanciesCard from "../components/vacanciesCards";
import {Form, Input, Modal, Button, Upload} from "antd";
import ContactUsFooter from "../components/contactUsFooter";
import {useRouter} from "next/router";
import { toast } from 'react-toastify';
import ru from "../public/locales/ru";
import ua from "../public/locales/ua";
import en from "../public/locales/en";

const Vacancies = ({ vacancies, homepage}) => {


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
    const [selectedVacancyTitle, setSelectedVacancyTitle] = useState("");

    const showModal = (title) => {
        setSelectedVacancyTitle(title);
        setIsModalVisible(true);
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
        Vacancy: ${selectedVacancyTitle}
        Name: ${values.username}
        Phone: ${values.phone}
        Email: ${values.email}
        Link: ${values.link}
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
            await fetchAPI('/vacancies-messages', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name: values.username,
                                phone: values.phone,
                                email: values.email,
                                link: values.link,
                                message:values.message,
                                cv: values.upload,
                            }),
                        })
    
            // Send file to Telegram
            // const formData = new FormData();
            // formData.append('chat_id', chatId);
            // formData.append('document', values.file.fileList[0].originFileObj);
    
            // await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
            //     method: 'POST',
            //     body: formData,
            // });
    
            toast.success("Form Success");
        } catch (err) {
            console.log(err);
            toast.error("Form Submission Failed");
        } finally {
            setIsModalVisible(false);
        }
    };
    
    // const submitHandler = async (values) => {
    //     // console.log(values.file.fileList[0])
    //     try {
    //         await fetchAPI('/vacancies-messages', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 name: values.username,
    //                 phone: values.phone,
    //                 email: values.email,
    //                 link: values.link,
    //                 message:values.message,
    //                 cv: values.upload,
    //             }),
    //         })
    //         await fetchAPI('/upload', {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "multipart/form-data; boundary=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD"
    //             },
    //             // body: values.file.fileList[0],
    //             body: values.file.name,
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    //     setIsModalVisible(false);
    //     toast.success("Form Success");
    // }

    return (
        <Layout pageClass="vacancies">
            <Seo seo={homepage.seo} />
            <section className="head">
                <div className="container">
                    <div className="text">
                        <h1>{vacancies.main.heading}</h1>
                        <p>{vacancies.main.about}</p>
                    </div>
                </div>
            </section>
            <section className="vacanciesCards">
                <div className="container">
                    { vacancies.CardVacancies ?
                        vacancies.CardVacancies.map((card) => {
                            return(
                                <VacanciesCard  key={card.id} card={card} showModal={() => showModal(card.position)}/>
                            )})
                        : null}
                </div>
            </section>
            <ContactUsFooter data={vacancies.footer}/>
            <Modal
                wrapClassName="modalVacancies"
                open={isModalVisible}
                onOk={handleOk}
                footer={[]}
                onCancel={handleCancel}
            >
                <h4>{t.ApplyVacancy}</h4>
                <Form
                    name="Apply for a vacancy"
                    initialValues={{ remember: true }}
                    onFinish={submitHandler}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: `${t.attentionName}` }]}
                    >
                        <Input placeholder={t.Username + "*"}/>
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
                    <Form.Item
                        name="link"
                    >
                        <Input placeholder={t.PortfolioLink} />
                    </Form.Item>
                    <Form.Item name="message">
                        <Input.TextArea placeholder={t.YourMessage}/>
                    </Form.Item>
                    {/*<Form.Item name="file"*/}
                    {/*           valuePropName="fileList">*/}
                    {/*    <Upload maxCount={1}>*/}
                    {/*        <Button className="uploadBtn">*/}
                    {/*            <span>*/}
                    {/*                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path d="M14.0129 7.41443L14.0129 7.4144C14.6831 6.75918 15.0618 5.86808 15.0618 4.93648C15.0618 4.00488 14.6831 3.11379 14.0129 2.45857C13.3431 1.80373 12.4371 1.43779 11.4946 1.43779C10.5521 1.43779 9.64604 1.80373 8.97624 2.45857L3.19532 8.11044C2.66403 8.61753 2.2402 9.22319 1.94893 9.89273C1.65724 10.5633 1.50446 11.2842 1.49979 12.0136C1.49511 12.7429 1.63864 13.4657 1.92173 14.1398C2.20482 14.8139 2.62167 15.4255 3.14754 15.9396C3.67338 16.4536 4.29777 16.8598 4.9842 17.1353C5.6706 17.4107 6.40574 17.55 7.14706 17.5454C7.88838 17.5407 8.62165 17.3922 9.30443 17.1082C9.9862 16.8246 10.6044 16.4113 11.1231 15.8918L16.5544 10.5826L17.2848 11.2967L11.8673 16.5932C11.2497 17.197 10.5159 17.6766 9.70745 18.004C8.89901 18.3314 8.03215 18.5 7.15646 18.5C6.28078 18.5 5.41392 18.3314 4.60548 18.004C3.79706 17.6766 3.06324 17.197 2.44562 16.5932C1.82803 15.9894 1.33874 15.2732 1.00514 14.4858C0.671545 13.6984 0.5 12.8549 0.5 12.0033C0.5 11.1517 0.671545 10.3082 1.00514 9.52082C1.33874 8.73341 1.82803 8.0172 2.44562 7.4134L8.22659 1.76348C9.09529 0.944696 10.2602 0.48988 11.4714 0.500171C12.6841 0.510473 13.8419 0.986103 14.6961 1.82122C15.5499 2.65599 16.0321 3.78284 16.0426 4.95841C16.053 6.13262 15.592 7.2661 14.7551 8.1148L8.97629 13.7676C8.73834 14.0002 8.45525 14.1853 8.14291 14.3117C7.83054 14.4382 7.49539 14.5034 7.15667 14.5033C6.81795 14.5033 6.48281 14.438 6.17048 14.3115C5.85817 14.185 5.57513 13.9998 5.33724 13.7672C5.09937 13.5346 4.91131 13.2591 4.78323 12.9567C4.65516 12.6543 4.58942 12.3306 4.58946 12.004C4.58949 11.6774 4.65531 11.3537 4.78346 11.0514C4.91161 10.749 5.09974 10.4735 5.33766 10.241L5.33771 10.2409L10.7713 4.92861L11.5017 5.64265L6.08797 10.9364C5.94371 11.0735 5.82793 11.2377 5.74786 11.42C5.66713 11.6037 5.62447 11.8017 5.62268 12.0024C5.6209 12.2032 5.66004 12.4019 5.73751 12.5871C5.81497 12.7722 5.92905 12.9396 6.07251 13.0798C6.21594 13.2201 6.38588 13.3304 6.57212 13.4049C6.75834 13.4794 6.95749 13.5167 7.15805 13.515C7.35862 13.5133 7.55711 13.4726 7.74203 13.3949C7.92548 13.3179 8.09229 13.2058 8.23257 13.0647L14.0129 7.41443Z" fill="black" stroke="black"/>*/}
                    {/*                </svg>*/}
                    {/*            </span>*/}
                    {/*            {t.AttacheYouCv}*/}
                    {/*        </Button>*/}
                    {/*    </Upload>*/}
                    {/*</Form.Item>*/}
                    <Form.Item >
                        <Button className="submit" type="primary" htmlType="submit" >
                            {t.Send}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    );
}

export async function getStaticProps({locale = "en"}) {
    // Run API calls in parallel
    const [vacancies, homepage] = await Promise.all([
        fetchAPI(`/vacancies?_locale=${locale}`),
        fetchAPI(`/homepage?_locale=${locale}`),
    ]);

    return {
        props: { vacancies, homepage},
        revalidate: 1,
    };
}

export default Vacancies;
