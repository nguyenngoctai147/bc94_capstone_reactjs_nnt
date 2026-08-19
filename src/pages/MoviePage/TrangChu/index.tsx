/* eslint-disable react-hooks/exhaustive-deps */
import CarouselHome from "./Content/CarouselHome";
import LayoutContainer from "../../../component/LayoutContainer";
import Data from "./Data/data.json";
import { TImageBanner, TDataUuDai } from "./Data";
import TitleHeading from "../../../component/common/TitleHeading";
import CardMovie from "../../../component/common/CardMovie";
import { useAppDispatch, useAppSelector } from "./../../../store/HookStore";
import { fetchMovieData } from "./slice";
import { useEffect } from "react";
import CardBlog from "./Content/CardBlog";
import LoadingSpinner from "../../../component/common/LoadingSpinner";

const imageBanner: TImageBanner[] = Data.carouselBanner;
const dataUuDai: TDataUuDai[] = Data.promotion;

export default function TrangChu() {
  const disPatch = useAppDispatch();
  const state = useAppSelector((state) => state.movieDataReducer);

  useEffect(() => {
    disPatch(fetchMovieData());
  }, []);

  if (state.loading) return <LoadingSpinner />;

  if (state.error) return "Lỗi tải dữ liệu";

  const DSDangChieu = state.data?.filter((item) => item.dangChieu === true);
  const DSSapChieu = state.data?.filter((item) => item.sapChieu === true);

  return (
    <>
      <CarouselHome items={imageBanner} />
      <LayoutContainer>
        <TitleHeading>Phim đang chiếu</TitleHeading>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {DSDangChieu?.slice(-4).map((item) => (
            <CardMovie key={item.maPhim} movie={item} />
          ))}
        </div>
      </LayoutContainer>
      <LayoutContainer>
        <TitleHeading>Ưu đãi đặc biệt</TitleHeading>
        <CardBlog item={dataUuDai} />
      </LayoutContainer>
      <LayoutContainer>
        <TitleHeading>Phim sắp chiếu</TitleHeading>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {DSSapChieu?.slice(-8).map((item) => (
            <CardMovie key={item.maPhim} movie={item} />
          ))}
        </div>
      </LayoutContainer>
    </>
  );
}
