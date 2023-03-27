import anne from './images/image-anne.jpg';
import colton from './images/image-colton.jpg';
import irene from './images/image-irene.jpg';
import './App.scss';

function App() {
  return (
    <section className='sp-card'>
      {/* top section */}
      <section className='sp-card-top'>
        <div className='sp-card-top-summary'>
          <h1>10,000+ of our users love our products.</h1>
          <p>We only provide great products combined with excellent customer service.See what our satisfied customers are saying about our services.</p>
        </div>
        <div className='sp-card-top-ratings rate1'>
          <div className='spc-rating-card'>
            <div className='star'></div>
            <h3>Rated 5 Stars in Reviews</h3>
          </div>
          <div className='spc-rating-card rate2'>
            <div className='star'></div>
            <h3>Rated 5 Stars in RepGuru</h3>
          </div>
          <div className='spc-rating-card rate3'>
            <div className='star'></div>
            <h3>Rated 5 Stars in BestTech</h3>
          </div>
        </div>
      </section>

      {/* bottom section */}
      <section className='sp-card-bottom'>
        <article className='sp-card-reviews rv1'>
          <div className='sp-card-reviews-details'>
            <img src={anne} alt='' />
            <section className='sp-card-user'>
              <h2>Colton Smith</h2>
              <span>Verified Buyer</span>
            </section>
          </div>
          <div className='sp-card-review'>
              "We needed the same printed design as the one we had ordered a week prior.
                Not only did they find the original order, but we also received it in time.
                Excellent!"
          </div>
        </article>
        <article className='sp-card-reviews rv2'>
          <div className='sp-card-reviews-details'>
            <img src={colton} alt='' />
            <section className='sp-card-user'>
              <h2>Irene Roberts</h2>
              <span>Verified Buyer</span>
            </section>
          </div>
          <div className='sp-card-review'>
              "Customer service is always excellent and very quick turn around. Completely
                delighted with the simplicity of the purchase and the speed of delivery."
          </div>
        </article>
        <article className='sp-card-reviews rv3'>
          <div className='sp-card-reviews-details'>
            <img src={irene} alt='' />
            <section className='sp-card-user'>
              <h2>Anne Wallace</h2>
              <span>Verified Buyer</span>
            </section>
          </div>
          <div className='sp-card-review'>
              "Put an order with this company and can only praise them for the very high
                standard. Will definitely use them again and recommend them to everyone!"
          </div>
        </article>
      </section>
    </section>
  );
}

export default App;
