/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";

export interface ListMovie {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}

export interface MovieState<T> {
  loading: boolean;
  data: T | null;
  error: AxiosError<any> | null;

}

export interface MoviesState<T> {
  loading: boolean;
  data: T | null;
  error: AxiosError<any> | null;
  currentPage: number;
  totalPages: number;
  totalCount: number;
  count: number;
}

export interface ResponseAPI<T> {
  statusCode: number;
  message: string;
  content: T;
}

// export interface PanigationListMovie<T> {
//   currentPage: number;
//   count: number;
//   totalPages: number;
//   totalCount: number;
//   items: T | null
// }

export interface PaginationMovieResponse<I> {
  statusCode: number;
  message: string;
  content: {
    currentPage: number;
    count: number;
    totalPages: number;
    totalCount: number;
    items: I;
  };
}