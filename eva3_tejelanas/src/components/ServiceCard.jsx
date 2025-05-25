import React from 'react';

const ServiceCard = ({ title, description, image, icon, onContact }) => {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card service-card h-100">
        <div className="service-image">
          <img 
            src={image}
            alt={title}
            className="card-img-top"
          />
          <div className="service-icon">
            {icon}
          </div>
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="service-title">{title}</h5>
          <p className="card-text text-muted-custom flex-grow-1">
            {description}
          </p>
          <button 
            onClick={() => onContact(title)}
            className="btn btn-primary-custom mt-auto"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;