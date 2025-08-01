

const WhyHostCard = ({whyhostData}) => {

  return (
    <div className='whyhostcards'>
          <div className='whytohoostimgDiv'><img src={whyhostData.image} alt="" /></div>
          <h5>{whyhostData.title}</h5>
          <p>{whyhostData.description}</p>
         </div>
  )
}

export default WhyHostCard