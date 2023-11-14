"use client";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  function clearCookies() {
    Cookies.remove("token");
    router.push("/login");
  }

  return (
    <div className="bg-[#3D1DF3] flex justify-between border-b shadow-xl border-blue-950">
      <div className="ml-[30px] py-[10px]">
        <svg
          width="44"
          height="30"
          viewBox="0 0 44 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_163_1419)">
            <path
              d="M23.0469 7.73698C24.9396 7.74418 26.7076 8.26254 28.4038 9.06887C30.1071 9.87761 31.8824 10.4584 33.7654 10.6407C36.3744 10.8927 38.8156 10.4128 41.0005 8.89369C41.2114 8.7473 41.4198 8.59851 41.6905 8.58171C41.8941 8.56971 42.0427 8.62731 42.1265 8.83849C42.5314 9.85841 42.6943 10.9047 42.4308 11.9798C42.1912 12.9566 41.5036 13.5877 40.6603 14.0605C39.7907 14.5476 38.842 14.7852 37.8549 14.8668C36.6403 14.97 35.4185 15.0252 34.2062 15.1452C33.1952 15.2436 32.1842 15.3876 31.305 15.9707C30.7228 16.3571 30.3299 16.885 30.1 17.5402C30.0113 17.7946 30.0808 17.8666 30.3467 17.7994C30.881 17.6674 31.4152 17.5522 31.9686 17.5762C33.0491 17.6242 33.6313 18.1641 33.7391 19.2345C33.8349 20.2016 33.5618 21.1087 33.2456 22.0014C32.891 23.0022 32.4358 23.9621 31.9423 24.9004C31.7698 25.2292 31.7722 25.2364 32.1291 25.2868C32.9413 25.3972 33.7678 25.4068 34.5584 25.6635C34.8195 25.7475 35.0711 25.8507 35.3155 25.9779C35.9384 26.2947 35.9048 26.8706 35.5934 27.3194C35.2987 27.7418 34.9465 27.8282 34.3859 28.0634C34.3644 28.073 34.338 28.0826 34.314 28.0874C33.3701 28.3513 32.4094 28.5721 31.4248 28.5457C30.4354 28.5193 29.3597 28.2769 29.3094 28.2577C28.6481 27.9986 28.514 27.7466 28.6889 27.065C28.9644 25.9899 29.1752 24.9076 29.1297 23.7917C29.1153 23.4533 29.0698 23.1221 28.9907 22.7958C28.7368 21.7375 27.939 21.1663 26.8418 21.2287C26.3962 21.2551 25.9721 21.3751 25.5481 21.4975C25.4786 21.5167 25.3947 21.5935 25.3277 21.5239C25.2462 21.4423 25.3325 21.3559 25.3636 21.2815C25.9529 19.8608 27.709 15.6347 28.0061 14.946C28.1115 14.6988 28.0468 14.562 27.8096 14.442C26.9088 13.9885 25.9673 13.6285 25.0498 13.2133C23.7465 12.6254 22.436 12.0494 21.1279 11.4687C20.747 11.3007 20.6416 11.3415 20.4931 11.7375C20.184 12.5606 19.7911 13.3357 19.2617 14.0461C18.7729 14.7036 18.1572 15.198 17.405 15.498C16.6216 15.8099 15.8118 15.7763 15.0116 15.5412C14.8823 15.5028 14.7553 15.4596 14.6283 15.414C14.0557 15.2028 13.7203 14.6076 13.8425 14.0101C14.0941 12.7742 14.6163 11.6583 15.5411 10.7583C17.1654 9.17926 19.1179 8.22174 21.3555 7.85937C21.9137 7.76818 22.4791 7.73218 23.0469 7.73458V7.73698Z"
              fill="white"
            />
            <path
              d="M10.4118 24.1685C9.88478 24.1685 9.61885 23.9021 9.66437 23.3789C9.71229 22.8198 9.90395 22.2918 10.11 21.7759C10.6179 20.4944 11.3366 19.3497 12.3763 18.4209C12.7956 18.0466 12.8172 18.0418 13.3322 18.2673C16.3844 19.6184 19.439 20.9647 22.4911 22.3134C22.7163 22.4142 22.9391 22.5222 23.1571 22.6374C23.2937 22.7094 23.3799 22.8222 23.2913 22.9854C22.5774 24.3221 21.6526 25.4212 20.105 25.8147C19.3647 26.0043 18.6651 25.8627 18.0063 25.5052C16.8635 24.8884 15.91 24.0341 15.0164 23.1078C14.6715 22.7502 14.336 22.3878 14.0054 22.0182C13.8809 21.879 13.7802 21.8694 13.6221 21.9654C13.4233 22.0854 13.3011 22.2654 13.1573 22.4334C12.6135 23.0718 12.0314 23.6597 11.2336 23.9765C10.97 24.0821 10.7041 24.1757 10.4118 24.1613V24.1685Z"
              fill="white"
            />
            <path
              d="M33.9068 8.92728C31.5901 8.96328 30.0952 7.02424 30.1143 5.18358C30.1359 3.03816 31.7985 1.40629 33.9235 1.43028C35.9863 1.45428 37.6154 3.14855 37.6058 5.23398C37.5962 7.54979 35.5886 8.97288 33.9068 8.92728Z"
              fill="white"
            />
            <path
              d="M43.4634 8.31534C43.1735 7.58339 42.529 7.14663 41.7384 7.14663C41.6953 7.14663 41.6522 7.14663 41.6067 7.15143C40.9359 7.18983 40.4711 7.5138 40.1908 7.70818L40.1764 7.71778C39.3163 8.31534 38.3964 8.7329 37.4046 8.98488C38.4515 8.01296 39.0313 6.68827 39.0384 5.24838C39.0528 2.38781 36.7649 0.0335973 33.9379 0H33.8732C30.984 0 28.7009 2.27502 28.6721 5.17879C28.6625 6.16991 28.9596 7.15143 29.4986 7.99616C29.3381 7.92417 29.1776 7.85457 29.0147 7.77778C26.9472 6.79626 24.9971 6.3163 23.0493 6.3091H22.9823C22.3354 6.3091 21.7101 6.35709 21.1232 6.45308C18.5741 6.86585 16.3581 7.97216 14.5373 9.74082C13.8282 10.4296 13.2795 11.2575 12.8938 12.203H9.20919C7.76217 12.203 6.58587 13.3813 6.58587 14.8308C6.58587 15.2604 6.69128 15.6635 6.87335 16.0211H2.62333C1.1763 16.0211 0 17.1994 0 18.6489C0 20.0984 1.1763 21.2767 2.62333 21.2767H8.76119C8.53599 21.8455 8.29163 22.515 8.22694 23.2661C8.15507 24.1037 8.4737 24.6412 8.75161 24.946C9.02951 25.2508 9.53741 25.6132 10.3783 25.618C10.4071 25.618 10.4334 25.618 10.4622 25.618C10.9629 25.618 11.3821 25.4788 11.7582 25.33C12.6015 24.9964 13.2364 24.4732 13.7731 23.9093C13.8401 23.9813 13.9096 24.0533 13.9767 24.1229C14.7841 24.958 15.8933 26.0163 17.3187 26.7867C18.0135 27.161 18.7274 27.3506 19.439 27.3506C19.7768 27.3506 20.1194 27.3074 20.4524 27.2234C22.7403 26.6427 23.8878 24.922 24.5538 23.6765C24.6928 23.4197 25.1839 23.0814 25.39 22.9998C25.7278 22.8654 26.5758 22.599 26.9568 22.671C27.3089 22.7358 27.5054 22.7886 27.5916 23.1413C27.6467 23.3741 27.6803 23.6165 27.6923 23.8613C27.733 24.8524 27.515 25.8603 27.297 26.7171C26.94 28.109 27.4431 29.0833 28.7895 29.6088C29.0554 29.712 30.3108 29.9664 31.3889 29.9928C31.4536 29.9928 31.5206 29.9952 31.5853 29.9952C32.7113 29.9952 33.7487 29.748 34.7022 29.4816C34.7812 29.46 34.8627 29.4312 34.9417 29.3976C35.0208 29.3641 35.0975 29.3329 35.1669 29.3065C35.6628 29.1073 36.2786 28.8577 36.7721 28.1497C37.2033 27.533 37.3495 26.8299 37.1841 26.1699C37.026 25.5412 36.5948 25.018 35.9671 24.6988C35.6557 24.5404 35.3394 24.4085 35.0016 24.3005C34.6495 24.1853 34.2997 24.1109 33.9619 24.0581C34.2086 23.5133 34.4195 22.9974 34.5992 22.491C34.9417 21.5239 35.2963 20.3864 35.1693 19.0977C35.0591 17.9938 34.5608 17.149 33.7678 16.6499C33.9571 16.6235 34.1511 16.6043 34.3452 16.5851C35.028 16.5179 35.7347 16.4699 36.4175 16.4243C36.9254 16.3907 37.4525 16.3547 37.9747 16.3091C39.266 16.2011 40.3729 15.8795 41.3623 15.3252C42.7135 14.5692 43.5185 13.5877 43.8275 12.3302C44.1437 11.0439 44.024 9.72882 43.4634 8.31293V8.31534Z"
              fill="white"
            />
            <path
              d="M23.0446 7.74657C24.9372 7.75377 26.7053 8.27213 28.4014 9.07847C30.1048 9.8872 31.88 10.468 33.7631 10.6503C36.372 10.9023 38.8133 10.4224 40.9982 8.90328C41.209 8.75689 41.4174 8.6081 41.6882 8.5913C41.8918 8.57931 42.0403 8.6369 42.1242 8.84808C42.5291 9.868 42.692 10.9143 42.4284 11.9894C42.1889 12.9662 41.5013 13.5973 40.658 14.0701C39.7883 14.5572 38.8396 14.7948 37.8526 14.8764C36.638 14.9796 35.4161 15.0348 34.2039 15.1548C33.1929 15.2532 32.1819 15.3972 31.3027 15.9803C30.7205 16.3667 30.3276 16.8946 30.0976 17.5498C30.009 17.8042 30.0784 17.8762 30.3444 17.809C30.8786 17.677 31.4129 17.5618 31.9663 17.5858C33.0468 17.6338 33.6289 18.1737 33.7367 19.2441C33.8326 20.2112 33.5594 21.1183 33.2432 22.011C32.8886 23.0118 32.4334 23.9717 31.9399 24.91C31.7674 25.2388 31.7698 25.246 32.1268 25.2964C32.9389 25.4068 33.7655 25.4164 34.5561 25.6731C34.8172 25.7571 35.0687 25.8603 35.3131 25.9875C35.936 26.3043 35.9025 26.8802 35.591 27.329C35.2963 27.7514 34.9442 27.8378 34.3836 28.0729C34.362 28.0825 34.3357 28.0921 34.3117 28.0969C33.3678 28.3609 32.4071 28.5817 31.4224 28.5553C30.433 28.5289 29.3573 28.2865 29.307 28.2673C28.6458 28.0082 28.5116 27.7562 28.6865 27.0746C28.962 25.9995 29.1729 24.9172 29.1273 23.8013C29.113 23.4629 29.0674 23.1317 28.9884 22.8054C28.7344 21.7471 27.9367 21.1759 26.8394 21.2383C26.5112 21.2575 26.195 21.3271 25.8811 21.4135C25.7685 21.4447 25.3924 21.6055 25.3229 21.5359C25.2415 21.4543 25.4187 21.1447 25.4547 21.0607C26.1183 19.46 27.7186 15.6131 27.9989 14.958C28.1044 14.7108 28.0397 14.574 27.8025 14.454C26.9017 14.0005 25.9602 13.6405 25.0426 13.2253C23.7393 12.6374 22.4289 12.0614 21.1208 11.4807C20.7399 11.3127 20.6345 11.3535 20.4859 11.7495C20.1769 12.5726 19.784 13.3477 19.2545 14.0581C18.7658 14.7156 18.1501 15.21 17.3978 15.51C16.6144 15.8219 15.8047 15.7883 15.0045 15.5531C14.8751 15.5148 14.7482 15.4716 14.6212 15.426C14.0486 15.2148 13.7132 14.6196 13.8354 14.0221C14.0869 12.7862 14.6092 11.6703 15.534 10.7703C17.1583 9.19126 19.1108 8.23373 21.3484 7.87136C21.9066 7.78017 22.472 7.74417 23.0398 7.74657H23.0446Z"
              fill="#3D1DF3"
            />
            <path
              d="M10.4095 24.1781C9.8824 24.1781 9.61647 23.9117 9.66199 23.3885C9.70991 22.8294 9.90156 22.3014 10.1076 21.7855C10.6155 20.504 11.3342 19.3592 12.374 18.4305C12.7932 18.0562 12.8148 18.0514 13.3299 18.2769C16.382 19.628 19.4366 20.9743 22.4887 22.323C22.7139 22.4238 22.9367 22.5318 23.1547 22.647C23.2913 22.719 23.3776 22.8318 23.2889 22.995C22.575 24.3317 21.6502 25.4308 20.1026 25.8243C19.3623 26.0139 18.6628 25.8723 18.0039 25.5148C16.8612 24.898 15.9077 24.0437 15.0141 23.1173C14.6691 22.7598 14.3337 22.3974 14.0031 22.0278C13.8785 21.8886 13.7779 21.879 13.6197 21.975C13.4209 22.095 13.2987 22.275 13.155 22.443C12.6111 23.0813 12.029 23.6693 11.2312 23.9861C10.9677 24.0917 10.7017 24.1853 10.4095 24.1709V24.1781Z"
              fill="#3D1DF3"
            />
            <path
              d="M33.9044 8.93688C31.5877 8.97288 30.0928 7.03383 30.1119 5.19318C30.1335 3.04775 31.7961 1.41588 33.9211 1.43988C35.9839 1.46388 37.613 3.15815 37.6034 5.24358C37.5938 7.55939 35.5862 8.98248 33.9044 8.93688Z"
              fill="#3D1DF3"
            />
          </g>
          <defs>
            <clipPath id="clip0_163_1419">
              <rect width="44" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="mr-[30px] py-[10px]">
        <button onClick={clearCookies}>
          <svg
            width="33"
            height="34"
            viewBox="0 0 33 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_163_1414)">
              <rect x="4" width="25" height="26" rx="4" fill="#3D1DF3" />
            </g>
            <path
              d="M17.2917 12.9999L24.7917 12.9999M24.7917 12.9999L23.125 11.2666M24.7917 12.9999L23.125 14.7333"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 16.9997C20.9898 18.7398 20.9081 19.6822 20.2579 20.297C19.5143 21 18.3175 21 15.9239 21L15.0776 21C12.684 21 11.4872 21 10.7436 20.297C10 19.594 10 18.4625 10 16.1996L10 9.79903C10 7.53609 10 6.40462 10.7436 5.70162C11.3939 5.08686 12.3907 5.00969 14.2313 5L17.6164 5.01247C18.931 5.04992 19.7152 5.18853 20.2579 5.70162C20.9081 6.31638 20.9898 7.25879 21 8.99896"
              stroke="white"
              strokeLinecap="round"
            />
            <defs>
              <filter
                id="filter0_d_163_1414"
                x="0"
                y="0"
                width="33"
                height="34"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_163_1414"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_163_1414"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
