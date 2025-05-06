"use client";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

import Container from "../global/container";import { Button } from "../ui/button";
import { SectionBadge } from "../ui/section-bade";

type Plan = "monthly" | "yearly";
const cardData = [
    { title: "Computer Vision & ML", description: "Wisepl provides professionally managed individuals who work on teams , are well thought out and trained in Data Annotation" },
    { title: "Video Annotation", description: "We can annotate the any type of video using the latest technology and tools helping to build the computer vision model work with highest quality." },
    { title: "Audio Annotation", description: "Our highly trained workforce can able to categorize the topic and determine emotion of peoples , also identify an important event in a snippet of audio." },
    { title: "AI in Retails", description: "To make accurate, data-driven decision in retail, Wisepl use Services like Images and Videos annotation using bounding boxes or 2D and 3D cuboids." },
    { title: "Medical Annotation", description: "We offer cost-effective Medical data annotation service like Semantic Segmentation and Polygon annotation with highest accuracy in diseases and organs diagnosis." },
    { title: "Data Research for Universties & Companies", description: "Wisepl offer cutting-edge research and collaborations with universities other institutuons to achieve better business benefit." },
    { title: "Logistics Annotation", description: "Using various annotation techniques.We help to identify Bar codes, QR codes for Supply chain and logistics Industries for better traking of Goods and courier" },
    { title: "Sports & Games Annotation", description: "Using various annotation techniques. We analyze images and videos to deliver high quality training data for Sports & games Industrries" },
    { title: "Web Development", description: "Wisepl has Professional team of Developers, which have good knowledge in Latest Technologies, We provide efficient and affordable applications" },
    { title: "Insurance", description: "We help insurance Companies to Analyzing the insurance applications for claims, identifying risk, and reviewing Medical records" },
    { title: "Branding", description: "Wisepl can cater to any of your design needs. From Logo designing to Brochure designing and Product catelog for your Business." },
    { title: "Online Promotion", description: "Wisepl are here to helps to grow your business through perfect solutions." },
    { title: "Business process outsourcing (BPO)", description: "Wisepl Bpo is a leading outsourcing service provider in South India and offers the consistent and reliable support services to all the clients." },
    { title: "Software Design & Development", description: "Wisepl supplies and supports a broad range of IT application solutions and services in Best of quality with cost effective plan" },
    { title: "Autonomus Vehicles", description: "Our project management team are expert in creating custom datasets for Autonomous vehicles and also provide annotation services , We detect obstacles in roads, distance calculation for lidar and radar images from obstecles" },
    { title: "Agricultural Annotation", description: "For monitoring crop health, soil and field and also detection in growth progress,ripeness and unwanted plants and weeds In Agriculture. We provide various Services such as bounding box, polygon annotation, semantic segmentation, cuboid annotation, key points, and polylines." }
  ];

const Pricing = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24  w-full relative mb-15">
            <Container>
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <SectionBadge title="Services" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Services we provide
                    </h2>
                    
                </div>
                <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                    Wisepl is providing all leading types of data annotation service used as data training in machine learning and deep learning. It offers Bounding Boxes, Semantic Segmentation, 3D Point Cloud Annotation and 3D Cuboid Annotation for fields like healthcare, autonomous driving or drone falying, retail, security surveillance and agriculture. Wisepl works with scalable solution, available at turnaround time and cost-effective pricing for clients across the globe.
                   <br /><br /><br /><br /> </p>
            </Container>
            <div>
            

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 c pt-15">
  {cardData.map((card, index) => (
    <Card key={index} className=" max-w-[250px] bg-[#09090B] border border-[#31264d]">
        <h2 className="px-6 py-5 font-bold"> {card.title}</h2>
      <Divider />
      <CardBody>
        <p className="px-3 pb-10">{card.description}</p>
      </CardBody>
    </Card>
  ))}
</div>

  

            </div>
   
        </div>
    )
};


export default Pricing
