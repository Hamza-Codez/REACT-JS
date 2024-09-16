import React from 'react';

const Card = ({ imageSrc, cityName, Description }) => {
  return (
    <div className='Card'>
      <div className='grid p-8 text-center gap-6 md:grid-cols-2 md:text-start md:items-center lg:flex lg:flex-col lg:text-center'>
        <div className='w-[100%]'>
          <img className='border-none rounded-xl w-full h-full lg:h-52 sm:h-52' src={imageSrc} alt={cityName} />
        </div>
        <div>
          <h1 className='font-bold text-fuchsia-800 text-2xl md:text-3xl mb-2'>{cityName}</h1>
          <p className='font-semibold text-sm md:text-base'>{Description}</p>
        </div>
      </div>
    </div>
  );
};

const LondonCard = () => {
  return (
    <Card
      cityName='London'
      Description='London, the capital of the United Kingdom, is one of the most iconic and influential cities in the world. Founded by the Romans over 2,000 years ago, it has grown into a global hub for finance, culture, art, education, and politics.'
      imageSrc='/Images/pexels-photo-220769.jpeg'
    />
  );
};

const ParisCard = () => {
  return (
    <Card
      cityName='Paris'
      Description="Paris, the capital of France, is renowned for its art, culture, fashion, and historical significance. Known as the 'City of Light', it is home to some of the most famous landmarks in the world."
      imageSrc={'/Images/pexels-photo-1796725.jpeg'}
    />
  )
}

const NyCard = () => {
  return (
    <Card
      cityName='NewYork'
      Description="New York City is one of the most dynamic and diverse cities in the world. Known as 'The City That Never Sleeps', it is famous for its fast-paced lifestyle and global significance."
      imageSrc={'/Images/Ny.jpeg'}
    />
  )
}

export { Card, LondonCard, ParisCard, NyCard };

