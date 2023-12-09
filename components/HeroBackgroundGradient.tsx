const HeroBackgroundGradient = () => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-[-128px] left-[-128px] z-[-1]"
  >
    <g clipPath="url(#clip0_202_27)" filter="url(#filter0_d_202_27)">
      <g filter="url(#filter1_f_202_27)">
        <circle cx="4" r="256" fill="#8C8C8C" />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_202_27"
        x="0"
        y="0"
        width="1928"
        height="1088"
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_202_27"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_202_27"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_f_202_27"
        x="-752"
        y="-756"
        width="1512"
        height="1512"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="250"
          result="effect1_foregroundBlur_202_27"
        />
      </filter>
      <clipPath id="clip0_202_27">
        <rect
          width="1920"
          height="1080"
          fill="white"
          transform="translate(4)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default HeroBackgroundGradient;
