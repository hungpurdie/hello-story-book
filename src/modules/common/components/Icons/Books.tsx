import { SVGProps } from 'react';

const SvgBooks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m19.973 18.999-2.336-13.38a1.406 1.406 0 0 0-.599-.922 1.549 1.549 0 0 0-.533-.224 1.608 1.608 0 0 0-.585-.016l-2.516.378c-.108.023-.212.06-.31.11a1.537 1.537 0 0 0-.997-.405H9.5v-.184a1.336 1.336 0 0 0-.453-.964A1.565 1.565 0 0 0 7.993 3H5.448a1.557 1.557 0 0 0-1.027.421A1.33 1.33 0 0 0 4 4.383v15.114c0 .365.156.716.435.975s.657.406 1.053.408h2.505a1.57 1.57 0 0 0 .75-.194c.222.125.477.192.738.194h2.556c.395-.002.773-.15 1.052-.408.279-.26.435-.61.435-.975v-5.293l.999 5.616c.025.183.092.36.195.518.103.159.24.296.403.404.255.166.558.256.869.258h.24l2.525-.378c.197-.031.384-.098.552-.197.168-.099.313-.227.426-.378a1.33 1.33 0 0 0 .235-.502 1.28 1.28 0 0 0 .005-.546Zm-11.98.498H5.458V4.383h2.535v15.114Zm3.994 0H9.5V5.95h2.536l-.05 13.546Zm0 .692v-.692.692Zm3.993-.59L13.644 6.226l2.516-.378 2.356 13.371-2.536.378Z'
      fill={props.color}
    />
  </svg>
);

export default SvgBooks;
