import React, { Component, useEffect, useState } from "react";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {Form, Input, Modal, Button, Table} from "antd";
import Text from "../../components/text";
import Link from "next/link";
import { toast } from 'react-toastify';
import Hero from "../../components/hero";
import FullScreenVideo from "../../components/fullScreenVideo";
import FullScreenImage from "../../components/fullscreenImage";
import ContainerVideo from "../../components/containerVideo";
import ContainerImage from "../../components/containerImage";
import RichColumns from "../../components/richColumns";
import SplitTextBlock from "../../components/splitTextBlock";
import VacanciesCard from "../../components/vacanciesCards";
import Columns from "../../components/columns";
import {useRouter} from "next/router";
import ru from "../../public/locales/ru";
import ua from "../../public/locales/ua";
import en from "../../public/locales/en";
import DarkBlock from "../../components/darkBlock";
import TagManager from "react-gtm-module";


const Service = ({ service, seo, services, categories }) => {

    useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KWR4KXG2' });
  }, []);

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
          console.log(title, 'title');
          setIsModalVisible(true);
          setSelectedVacancyTitle(title);
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
          Vacancy form
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
      
              toast.success("Form Success");
          } catch (err) {
              console.log(err);
              toast.error("Form Submission Failed");
          } finally {
              setIsModalVisible(false);
          }
      };
  const columns = [
    {
      title: '',
      dataIndex: 'title',
      key: 'title',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'core',
      dataIndex: 'core',
      key: 'core',
      // render: (text) => {text === 'TRUE' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/></svg> : text},
      render: (text) => <>{text === 'TRUE' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/></svg> : text === 'FALSE' ? <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg> : text}</>

    },
    {
      title: 'pro',
      dataIndex: 'pro',
      key: 'pro',
      render: (text) => <>{text === 'TRUE' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/></svg> : text === 'FALSE' ? <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg> : text}</>

    },
    {
      title: 'premium',
      dataIndex: 'premium',
      key: 'premium',
      render: (text) => <>{text === 'TRUE' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/></svg> : text === 'FALSE' ? <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg> : text}</>
    },
    {
      title: 'advance',
      dataIndex: 'advance',
      key: 'advance',
      render: (text) => <>{text === 'TRUE' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/></svg> : text === 'FALSE' ? <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg> : text}</>
    },
  ]
  return (
    <Layout categories={categories} pageClass="aboutUs servicePage">
      {/* <Seo seo={homepage.seo} /> */}
      <Text text={service?.mainText} />
      <DarkBlock>
      <button className="apply"
        onClick={showModal}
          >{t.SUBMIT_A_REQUEST}</button>
      </DarkBlock>
      {service.image1 ?
      <ContainerImage
            image={service?.image1}
          />
        : null}
      {/* <Text text={service?.communicationText} /> */}
      <SplitTextBlock text={service?.SplitText}/>
      {/* {service.advantagesColumns && <Columns columns={service?.advantagesColumns} className="adventagesColumns marker" />} */}
      <Text text={service?.clientsText} />
      <Columns columns={service?.columnsBlock} />
      {/* {service.image2 && <ContainerImage
            image={service?.image2}
          />
          }
      {service.image3 && <ContainerImage
            image={service?.image3}
          />} */}
      <section className="vacanciesCards">
        <div className="container">
          { service.workers &&
              service.workers.card.map((card) => {
                return(
                  <VacanciesCard  key={card.id} card={card}/>
                      )})
          } 
        </div>
      </section>
      {service.table && 
        <section>
        <Table columns={columns} dataSource={service.table} pagination='none'/>
        </section>
      }
      {service.image4 && <ContainerImage image={service?.image4}/> } 
      <Text className="uppercase" text={service?.servicesText} />
      <RichColumns columns={service?.markdownColumns} className="adventagesColumns marker" />
      {/* <Articles articles={services} count={4} /> */}
      <section className="allPostBtn">
        <div className="container">
          <Link href="/services">
            <a>{t.findOutMore}</a>
          </Link>
        </div>
      </section>
      
      {/* <FullScreenImage image={homepage.singleImage} />
      {homepage.productColumns && <Columns columns={homepage.productColumns} className="productColumns" />}
      {homepage.numericText ? <NumericText rows={homepage.numericText} /> : null}
      <Text text={homepage.commercial} />
      <CommercialProposal links={homepage.commercialLinks} /> */}
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
                    <Form.Item name="message">
                        <Input.TextArea placeholder={t.YourMessage}/>
                    </Form.Item>
                    <Form.Item >
                        <Button className="submit" type="primary" htmlType="submit" >
                            {t.Send}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
    </Layout>
  );
};

export async function getServerSideProps({ params, locale }) {
  const [service, services] = await Promise.all([
    fetchAPI(`/service-collections?_locale=${locale}&slug=${params.slug}`),
    fetchAPI(`/service-collections?_locale=${locale}`),
  ]);

  return {
    props: { service: service[0], services },
  };
}

export default Service;
