"use client";

import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import MagicCard from "../ui/magic-card";
import { Ripple } from "../ui/ripple";
import { SectionBadge } from "../ui/section-bade";

const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Industries" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Used in various industries
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                    AI technology is transforming various sectors, including transportation, education, manufacturing, e-commerce, communication, sports, media, healthcare, politics, government, banking, finance, aerospace, and more.
                    </p>
                </div>
            </Container>
            <div className="mt-16 w-full">
                <div className="flex flex-col items-center gap-5 lg:gap-5 w-full">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start size-full bg-primary/[0.08]">
                                <div className="bento-card flex items-center justify-center min-h-72">
                                    <span className="text-muted-foreground group-hover:text-foreground mx-auto relative">
                                        <img src="https://wisepl.com/assets/img/portfolio/car2.jpg" alt="" />
                                    <p><br />Bounding boxes are used by cars to identify objects</p>
                                    </span>
                                </div>
                            </MagicCard>
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full h-40">
                                        <img src="https://wisepl.com/assets/img/portfolio/robo1.jpg" alt="" />
                                        
                                        <p><br />Through Bounding box we are preparing dataset for tracking, counts of goods, boxes categories etc.. for making ML product of our customers.</p>
                                    </div>
                                    
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full h-52 relative">
                                        <img src="https://wisepl.com/assets/img/portfolio/retail_industries3.jpg" alt="" />
                                        <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                    <div className="flex flex-col mt-auto">
                                        <h4 className="text-xl font-heading font-medium heading">
                                          
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                        <br /> Wisepl provides a full range of annotation services for the retail industry. We have labeled various product images, including clothing, food items, machinery, furniture, and books. Our focus is on delivering high-quality annotations to enhance AI applications in retail.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                            <div className="grid grid-rows gap-5 lg:gap-5">
                                <MagicCard particles={true} className="flex flex-col items-start w-full row-span- row-start-[0.5] h-32 bg-primary/[0.08]">
                                    <div className="bento-card w-full relative items-center justify-center">
                                        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <img src="https://wisepl.com/assets/img/portfolio/robo2.jpg" alt="" />
                                        </div>
                                        <div className="w-full h-16 relative">
                                           
                                            <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                        </div>
                                    </div>
                                </MagicCard>
                                <MagicCard particles={true} className="flex flex-col items-start w-full row-start-2 !h-max bg-primary/[0.08]">
                                    <div className="bento-card w-full gap-6 relative">
                                        <div className="w-full h-48 relative">
                                            <img src="https://wisepl.com/assets/img/portfolio/camera2.jpg" alt="" />
                                        </div>
                                        <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                </MagicCard>
                            </div>
                            <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="flex flex-col mb-auto">
                                        <img src="https://wisepl.com/assets/img/portfolio/camera1.jpg" alt="" />
                                    </div>
                                    <p>Wisepl is a leading company in image annotation, providing highly accurate data labeling to ensure security cameras can effectively detect various objects, including household items.</p>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
            
                </div>
            </div>
        </div>
    )
};

export default Features
