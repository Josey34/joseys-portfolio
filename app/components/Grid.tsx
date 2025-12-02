import { Suspense } from "react";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
    return (
        <section id="about">
            <Suspense fallback={
                <div className="w-full p-20">
                    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 lg:gap-8 mx-auto">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="row-span-1 rounded-3xl bg-[#13162d] animate-pulse min-h-[300px]"
                                style={{
                                    gridColumn: i === 1 ? "span 1" : i === 2 ? "span 3" : "span 1",
                                }}
                            />
                        ))}
                    </div>
                </div>
            }>
                <BentoGrid className="w-full p-20">
                    {gridItems.map(
                        ({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
                            <BentoGridItem
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                className={className}
                                img={img}
                                imgClassName={imgClassName}
                                titleClassName={titleClassName}
                                spareImg={spareImg}
                            />
                        )
                    )}
                </BentoGrid>
            </Suspense>
        </section>
    );
};

export default Grid;
