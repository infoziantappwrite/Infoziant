import "./css/Partnership.css";

export default function Partnership() {
    const images = [
        './assets/partner-1.png',
        './assets/partner-2.png',
        './assets/partner-3.png',
        './assets/partner-4.png',
        './assets/partner-5.png',
        './assets/partner-6.png',
        './assets/partner-7.png',
        './assets/partner-8.png',
        './assets/partner-9.jpg',
        './assets/partner-10.png',
        './assets/partner-11.png',
        './assets/partner-12.png',
        './assets/partner-13.png',
        './assets/partner-14.png',
        './assets/partner-15.png',
        './assets/partner-16.png',
        './assets/partner-17.png',
        './assets/partner-18.png',
        './assets/partner-19.png',
        './assets/partner-20.png',
        './assets/partner-21.png',
        './assets/partner-22.png',
        './assets/partner-23.png',
        './assets/partner-24.png',
        './assets/partner-25.png',
        './assets/partner-26.png',
        './assets/partner-27.png',

    ];

    // Duplicate the images to create a seamless loop effect
    const doubledImages = [...images, ...images,...images, ...images,...images,...images,];

    return (
        <section className="partnership">
          <div className="parhtership_content">
          <h1>
          Trusted by <span className="highlight">Leading Companies</span> Worldwide
            </h1>
            <p>
            Our clients come from various industries, all sharing a common belief in our commitment to quality and innovation
            </p>
          </div>

            {/* Ribbon of images */}
            <div className="ribbon-container">
                {doubledImages.map((image, index) => (
                    <div key={index} className="ribbon-item">
                        <img src={image} alt={`Partner ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}
