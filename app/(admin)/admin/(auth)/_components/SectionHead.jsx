
export const SectionHead = ({ title, subTitle, moto }) => (
  <>
    <h1 className="text-4xl font-extrabold text-left">{title}</h1>
    <p className="text-xl max-w-lg text-center leading-normal">{subTitle}</p>
    <p className="text-base max-w-lg text-center text-gray-500">{moto}</p>
  </>
);
