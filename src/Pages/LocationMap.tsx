

const LocationMap: React.FC = () => {
  return (
   <div className="w-full flex justify-center my-6 px-4">
  <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-4">
    <div className="w-full h-[350px] md:h-[500px] overflow-hidden rounded-lg">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.138164153702!2d85.3487545!3d27.6821243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e657ff96c9%3A0xa1214bd7e421c10a!2sZodira%20Holidays%20Pvt.ltd.!5e0!3m2!1sen!2snp!4v1764490093536!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</div>

  );
};

export default LocationMap;
