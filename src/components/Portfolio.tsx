"use client"
import PortfolioContent from "./PortfolioContent";
import Masonry from 'react-masonry-css';
import { Pencil } from "lucide-react";
import { useEditMode } from "@/contexts/EditModeContext";

type AspectRatio = 'video' | 'square';

export default function Portfolio() {
    const { isEditMode, toggleEditMode } = useEditMode();
    const portfolioItems = [
        { id: 1, src: "https://www.youtube.com/embed/-YlmnPh-6rE", aspect: "video" },
        { id: 2, src: "https://www.youtube.com/embed/_aCQu35NA7M", aspect: "square" },
        { id: 3, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 4, src: "https://www.youtube.com/embed/8of5w7RgcTc?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 5, src: "https://www.youtube.com/embed/IltsOcCj1Ak?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 6, src: "https://www.youtube.com/embed/vsWxs1tuwDk?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 7, src: "https://www.youtube.com/embed/4CeApFT9JqE?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 8, src: "https://www.youtube.com/embed/_aCQu35NA7M", aspect: "square" },
        { id: 9, src: "https://www.youtube.com/embed/y3RhoAQXJ8I?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 10, src: "https://www.youtube.com/embed/3u6lLWGjFLY?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 11, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 12, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 13, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 14, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 15, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 16, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 17, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 18, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 19, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 20, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
        { id: 21, src: "https://www.youtube.com/embed/_aCQu35NA7M", aspect: "square" },
        { id: 22, src: "https://www.youtube.com/embed/aKOB-vT45HM?si=BfXvpd2jBtNBuM3S", aspect: "video" },
    ]
     // Translate your desired column width into breakpoints
     const breakpointColumnsObj = {
        default: 3,       // 4 columns for very wide screens
        1200: 3,        // 3 columns for screens > 1200px
        900: 2,         // 2 columns for screens > 900px
        600: 1          // 1 column for screens > 600px
      };
  
      return (
        <div className="">
          <div className="flex justify-between items-center mb-4">
          <span className="text-3xl font-semibold w-full font-mono text-yellow-50 ml-6">Portfolio</span>
          <Pencil size={20} className={`${isEditMode ? "" : "hidden"}`} />
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`my-masonry-grid flex  gap-4 p-4 ${isEditMode ? "bg-zinc-800 p-2 rounded-xl border" : ""}`}
            columnClassName="my-masonry-grid_column"
          >
            {portfolioItems.map((item) => (
                <div key={item.id} className="mb-4">
                    <PortfolioContent src={item.src} aspect={item.aspect as AspectRatio} featured={false} />
                </div>
            ))}
          </Masonry>
        </div>
      )
}