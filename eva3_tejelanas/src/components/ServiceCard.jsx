const ServiceCard = ({ title, description, image, icon: Icon, onContact }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon */}
        <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
          <Icon className="w-6 h-6 text-rose-600" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <button 
          onClick={() => onContact(title)}
          className="w-full bg-gradient-to-r from-rose-500 to-blush-500 hover:from-rose-600 hover:to-blush-600 text-white font-medium py-2 rounded-full transition-all duration-200"
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
