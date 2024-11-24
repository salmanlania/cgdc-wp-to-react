import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us - CGD Consulting - Engineering Excellence</title>
            </Helmet>
            <div className="lg:my-24 md:my-24 my-12 mx-4">
                <div className="flex py-0">
                    <div className="flex flex-col w-full max-w-screen-xl">
                        <Row gutter={[0, 20]} justify="center" align="middle">
                            <Col className="gutter-row flex justify-center" xs={24} sm={24} md={8} lg={8} xl={8}>
                                <div className="w-96 h-[220px] p-6 flex flex-col">
                                    <h1 className="uppercase font-black font-outfit text-zinc-600 text-4xl">Contact</h1>
                                    <h1 className="uppercase font-black font-outfit text-zinc-600 text-3xl whitespace-nowrap">CGD Consulting</h1>
                                    <p className="font-jost font-light text-lg h-20 overflow-hidden">Give us a call or send us a message to find out more about our company, our culture, our solutions, or our services.</p>
                                </div>
                            </Col>
                            {/* <Col className="gutter-row flex justify-center" xs={24} sm={24} md={8} lg={8} xl={8}>
                                <div className="w-96 h-[220px] p-6 bg-gradient-to-br from-red-600 to-red-800 flex flex-col text-white">
                                    <h1 className="uppercase font-black font-outfit text-lg my-3">Regional Offices</h1>
                                    <p className="font-jost font-light text-sm h-6">UAE</p>
                                    <p className="font-jost font-light text-sm h-6 mb-10">21-C, 5th Zamzama Commercial Lane, DHA Phase V, Karachi Pakistan</p>
                                    <p className="font-jost font-light text-sm h-6"><FontAwesomeIcon className="me-3" icon={faPhone} />Phone: +92-21-111-124-338</p>
                                    <p className="font-jost font-light text-sm h-6"><FontAwesomeIcon className="me-3" icon={faEnvelope} />Email: info@cgdc.pk</p>
                                    <p className="font-jost font-light text-sm h-6"><FontAwesomeIcon className="me-3" icon={faEnvelope} />Careers: careers@cgdc.pk</p> */}
                                    {/* <p className="font-jost font-light text-sm h-6">Saudi Arabia</p>
                                    <p className="font-jost font-light text-sm h-6">Canada</p> */}
                                {/* </div>
                            </Col> */}
                            <Col className="gutter-row flex justify-center" xs={24} sm={24} md={8} lg={8} xl={8}>
                                <div className="w-96 h-[220px] p-6 bg-gradient-to-br from-red-600 to-red-800 flex flex-col text-white">
                                    <h1 className="uppercase font-black font-outfit text-lg mb-3">Regional Office</h1>
                                    <p className="font-jost font-light text-sm h-6 mb-10">Office 212, second floor, Pyramid Center, Oud metha, Dubai.</p>
                                    <p className="font-jost font-light text-sm h-6"><FontAwesomeIcon className="me-3" icon={faPhone} />Phone: 048719300</p>
                                    <p className="font-jost font-light text-sm h-6"><FontAwesomeIcon className="me-3" icon={faEnvelope} />Email: info@cgdc.ae</p>
                                    <p className="font-jost font-light text-sm h-6"><FontAwesomeIcon className="me-3" icon={faEnvelope} />Careers: careers@cgdc.ae</p>
                                </div>
                            </Col>
                            <Col className="gutter-row flex justify-center" xs={24} sm={24} md={8} lg={8} xl={8}>
                                <div className="w-96 h-[220px] p-6 bg-gradient-to-br from-red-600 to-red-800 flex flex-col text-white">
                                    <h1 className="uppercase font-black font-outfit text-lg mb-3">Corporate Head Office</h1>
                                    <p className="font-jost font-light text-sm h-6 mb-10">21-C, 5th Zamzama Commercial Lane, DHA Phase V, Karachi Pakistan</p>
                                    <p className="font-jost font-light text-sm h-6"><FontAwesomeIcon className="me-3" icon={faPhone} />Phone: +92-21-111-124-338</p>
                                    <p className="font-jost font-light text-sm h-6"><FontAwesomeIcon className="me-3" icon={faEnvelope} />Email: info@cgdc.pk</p>
                                    <p className="font-jost font-light text-sm h-6"><FontAwesomeIcon className="me-3" icon={faEnvelope} />Careers: careers@cgdc.pk</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;