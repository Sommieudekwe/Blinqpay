export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  chevronLeftIcon: (props: IconProps) => (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.8071 6.60538C0.470715 6.27069 0.470715 5.72714 0.8071 5.39245L5.97397 0.251531C6.31035 -0.0831643 6.85664 -0.0831642 7.19302 0.251531C7.52941 0.586226 7.52941 1.12977 7.19302 1.46447L2.63434 6.00026L7.19033 10.536C7.52672 10.8707 7.52672 11.4143 7.19033 11.749C6.85395 12.0837 6.30766 12.0837 5.97128 11.749L0.804408 6.60806L0.8071 6.60538Z"
        fill="#060606"
      />
    </svg>
  ),

  chevronRightIcon: (props: IconProps) => (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.1929 6.60538C7.52929 6.27069 7.52929 5.72714 7.1929 5.39245L2.02603 0.251531C1.68965 -0.0831643 1.14336 -0.0831642 0.806975 0.251531C0.470591 0.586226 0.470591 1.12977 0.806975 1.46447L5.36566 6.00026L0.809667 10.536C0.473282 10.8707 0.473282 11.4143 0.809667 11.749C1.14605 12.0837 1.69234 12.0837 2.02872 11.749L7.19559 6.60806L7.1929 6.60538Z"
        fill="currentColor"
      />
    </svg>
  ),

  ArrowIcon: (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10" fill="none">
      <path d="M1 8.53564L4 4.78564L1 1.03564" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ),
};
