import React from "react";

const NAVMENU = [
  {
    id: 1,
    menuTitle: "홈",
  },
  {
    id: 2,
    menuTitle: "통계",
    subMenu: [
      {
        id: 1,
        sub: "시간단위분석",
        url: "",
      },
    ],
  },
  {
    id: 3,
    menuTitle: "주문관리",
    subMenu: [
      {
        id: 1,
        sub: "결제완료관리",
        url: "/product",
      },
      {
        id: 2,
        sub: "상품준비관리",
        url: "",
      },
      {
        id: 3,
        sub: "배송중관리",
        url: "",
      },
      {
        id: 4,
        sub: "배송완료관리",
        url: "",
      },
      {
        id: 5,
        sub: "구매확정관리",
        url: "",
      },
    ],
  },
  {
    id: 4,
    menuTitle: "취소/환불 관리",
    subMenu: [
      {
        id: 1,
        sub: "환불요청관리",
        url: "",
      },
      {
        id: 2,
        sub: "환불완료관리",
        url: "",
      },
      {
        id: 3,
        sub: "주문취소완료관리",
        url: "",
      },
    ],
  },
  {
    id: 5,
    menuTitle: "상품관리",
    subMenu: [
      {
        id: 1,
        sub: "상품 관리",
        url: "",
      },
      {
        id: 2,
        sub: "상품 등록",
        url: "",
      },
    ],
  },
  {
    id: 6,
    menuTitle: "고객응대관리",
    subMenu: [
      {
        id: 1,
        sub: "Q&A 관리",
        url: "",
      },
      {
        id: 2,
        sub: "텍스트 리뷰",
        url: "",
      },
    ],
  },
  {
    id: 7,
    menuIcon: <Gift size="16" />,
    menuTitle: "기획전/쿠폰관리",
    status: false,
    subMenu: [
      {
        id: 1,
        sub: "기획전 관리",
        url: "",
      },
      {
        id: 2,
        sub: "쿠폰 관리",
        url: "",
      },
    ],
  },
  {
    id: 5,
    menuTitle: "회원 관리",
    subMenu: [
      {
        id: 1,
        sub: "회원관리_커뮤니티",
        url: "",
      },
      {
        id: 2,
        sub: "셀러 계정 관리",
        url: "",
      },
    ],
  },
];

export default NAVMENU;
