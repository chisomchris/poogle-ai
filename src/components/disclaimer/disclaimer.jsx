import style from './disclaimer.module.css'

export const Disclaimer = () => {
  return (
    <div className={style.wrapper}>
      <h2> Legal Disclaimer</h2>
      <p className={style.text}>
        None of the information on this website should be construed as providing
        legal or financial advice. Please note there are always risks associated
        with smart contracts. Please use at your own risk. The Poogle team can
        not be held liable for any losses or taxes you may incur. 
        </p>
        <p className={style.text}>You also agree that the team representing the token is community members, and cannot modify the contract due to it being renounced. Do conduct your own due diligence and consult your financial advisor before making any
        investment decision
      </p>
    </div>
  );
};
