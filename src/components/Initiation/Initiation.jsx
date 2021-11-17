import logo1 from "../../assets/svg/initiation/initiation1.svg";

const Initiation = () => {
  return (
    <div className="text-center mt-0 flex-col">
      <h2 className="text-5xl mx-12 mb-8 font-bold text-text">
        <span className="text-solana">find</span> the{" "}
        <span className="text-solana">we</span>ath
        <span className="text-solana">er </span> your
        <span className="text-solana"> city!</span>
      </h2>
      <img
        className="object-none object-center h-40 w-full"
        src={logo1}
        alt="weather"
      />
    </div>
  );
};

export default Initiation;
