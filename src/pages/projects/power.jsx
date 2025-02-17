import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import staticImg from "../../assets/images/projects/static.png";
import { useState } from 'react';
import { Modal } from 'antd';
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMapLocationDot, faMoneyCheckDollar, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Power = () => {
    let { state } = useLocation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null); // Track selected card for modal content

    const showModal = (card) => {
        setSelectedCard(card); // Set the selected card's data
        setIsModalOpen(true); // Open the modal
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setSelectedCard(null); // Reset selected card when modal closes
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedCard(null); // Reset selected card when modal closes
    };


    let cardData = state?.cardData;

    if (!cardData) {
        cardData = [
            {
                id: 1,
                cardTitle: "Installation of 0.2 MGD Desalination Plant at Sangar Housing Project Gwadar",
                details: {
                    id: 1,
                    prjName: "Installation of 0.2 MGD Desalination Plant at Sangar Housing Project Gwadar",
                    mainLoc: "DC Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Design & Project Management",
                    amount: "58 Million",
                }
            },
            {
                id: 2,
                cardTitle: "Installation of 0.2 MGD Desalination Plant at Gwadar Industrial Estate",
                details: {
                    id: 2,
                    prjName: "Installation of 0.2 MGD Desalination Plant at Gwadar Industrial Estate",
                    mainLoc: "Gwadar Industrial Estate Development Authority",
                    city: "Gwadar, Pakistan",
                    workType: "Design & Project Management",
                    amount: "58 Million",
                }
            },
            {
                id: 3,
                cardTitle: "Construction of Sub Station, Installation of Transformer& Laying of LT&HT Cables",
                details: {
                    id: 3,
                    prjName: "Construction of Sub Station, Installation of Transformer& Laying of LT&HT Cables",
                    mainLoc: "Gwadar Industrial Estate Development Authority",
                    city: "Gwadar, Pakistan",
                    workType: "Detailed Design & Supervision",
                    amount: "50 Million",
                }
            },
            {
                id: 4,
                cardTitle: "Laying of Underground Cables & Installation of Transformer at Sangar Housing Project",
                details: {
                    id: 4,
                    prjName: "Laying of Underground Cables & Installation of Transformer at Sangar Housing Project",
                    mainLoc: "DC Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Detailed Design & Supervision",
                    amount: "200 Million",
                }
            },
        ]
    }

    return (
        <>
            <Helmet>
                <title>Water and Power - CGD Consulting - Engineering Excellence</title>
            </Helmet>
            {cardData ? (
                <div className="overflow-hidden mx-1 mb-16 mt-1">
                    <Row gutter={[11, 11]}>
                        {cardData.map((card, index) => (
                            <Col key={index} xs={24} sm={12} md={8} lg={8}>
                                <button onClick={() => showModal(card)}>
                                    <div className="project-card relative overflow-hidden group cursor-pointer">
                                        <img src={staticImg} alt={card.details.prjName} className="w-full h-full object-cover" />
                                        {/* Overlay */}
                                        <div className="project-overlay uppercase font-jost  text-white">
                                            <p className="px-12">
                                                <span className="first-span text-center border-l-4 border-white pl-2 block">{card.details.prjName}</span>
                                                <br />
                                                <span className="second-span border-none text-center block tracking-wide">
                                                    {card.details.city}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </Col>
                        ))}
                    </Row>

                    <Modal open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleCancel}>
                        {selectedCard && (
                            <div className="mx-6 my-8 text-white">
                                <h1 className="lg:text-2xl text-xl font-arimo uppercase font-black lg:my-4 my-3">
                                    <b>Project Details</b>
                                </h1>
                                <div className="flex lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faHouseChimney} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.prjName}
                                    </p>
                                </div>
                                <br />
                                <div className="flex  lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faUser} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.mainLoc}
                                    </p>
                                </div>
                                <br />
                                <div className="flex  lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faMapLocationDot} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.city}
                                    </p>
                                </div>
                                <br />
                                <div className="flex  lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faScrewdriverWrench} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.workType}
                                    </p>
                                </div>
                                <br />
                                <div className="flex  lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faMoneyCheckDollar} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.amount}
                                    </p>
                                </div>
                            </div>
                        )}
                    </Modal>
                </div >
            ) : (
                <p>No data available</p>
            )}
        </>
    );
};

export default Power;
