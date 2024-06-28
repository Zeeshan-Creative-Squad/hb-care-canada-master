function TestimonialCard(props) {
 
    return (
      <div className="testimonial-card px-md-5">
          <div className="testimonial-card-info">
            
            <div className="profile-info px-2 w-100">
              
                <img src={props.clientImg} alt="person " />
                <h4 className="name my-3 title">{props.clientName}</h4>
                <img src="/images/five-star.svg " className="mb-3 star-img" style={{borderRadius:0}}/>
                <p className="review-text para_main">{props.clientReview}</p>
            </div>
            
          </div>
      </div>
    )
  }
  
  export default TestimonialCard