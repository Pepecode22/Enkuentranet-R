const BenefitCard = ({ icon, title, text }) => {
  return (
    <div className="benefit-card h-100">
      <div className="benefit-icon">
        {icon}
      </div>
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-text">{text}</p>
    </div>
  );
};

export default BenefitCard;