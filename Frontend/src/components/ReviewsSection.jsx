import React, { useState } from 'react';
import { Star, ChevronDown, User } from 'lucide-react';

const reviewsData = [
    { id: 1, name: "Venkatesh Prasad", rating: 5, date: "2 days ago", text: "The wooden sofa quality is outstanding. The teak wood finish is exactly what I was looking for. Highly recommend DesignCraft for anyone in Hyderabad!" },
    { id: 2, name: "Lakshmi Narayanan", rating: 5, date: "1 week ago", text: "Excellent service. They delivered my dining table on time and the assembly was very professional. The wood is very solid." },
    { id: 3, name: "Karthik Raja", rating: 4, date: "2 weeks ago", text: "Very good chairs. Support for the back is great. Price is slightly on the higher side but the quality justifies it." },
    { id: 4, name: "Rajeshwari Devi", rating: 5, date: "3 weeks ago", text: "Beautifully crafted wardrobes. It has changed the look of my bedroom completely. The finish is very smooth." },
    { id: 5, name: "Meenakshi Sunder", rating: 5, date: "1 month ago", text: "I bought a bed and bedside tables. The craftsmanship is truly world-class. Happy to support local artisans from South India." },
    { id: 6, name: "Senthil Kumar", rating: 4, date: "1 month ago", text: "Sturdy furniture. The delivery team was polite. A bit of a delay in shipping but informed beforehand." },
    { id: 7, name: "Ananthakrishnan", rating: 5, date: "1 month ago", text: "Exceptional quality. The polish on the wood is very premium. Worth every rupee." },
    { id: 8, name: "Subhashini", rating: 5, date: "2 months ago", text: "Ordered a custom bookshelf. They understood my requirements perfectly. It fits my study room beautifully." },
    { id: 9, name: "Thiyagarajan", rating: 5, date: "2 months ago", text: "The best furniture shop in Hafeezpet. I visited the showroom and was impressed by the collection." },
    { id: 10, name: "Murali Manohar", rating: 4, date: "2 months ago", text: "Good range of sofas. The fabric quality is also top-notch. Very comfortable seating." },
    { id: 11, name: "Vijayalakshmi", rating: 5, date: "3 months ago", text: "Most reliable furniture brand. We've been using their dining set for 2 years now, still looks new." },
    { id: 12, name: "Padmavathi", rating: 5, date: "3 months ago", text: "Very elegant designs. The walnut finish on the coffee table is superb." },
    { id: 13, name: "Srinivas Rao", rating: 5, date: "3 months ago", text: "Highly satisfied with the shoe rack. Very space-efficient and looks like a piece of art." },
    { id: 14, name: "Kavitha Reddy", rating: 4, date: "4 months ago", text: "Great experience shopping here. Staff is very knowledgeable and helpful." },
    { id: 15, name: "Balasubramanian", rating: 5, date: "4 months ago", text: "The craftsmanship in the carvings is amazing. Real traditional South Indian feel." },
    { id: 16, name: "Revathi Gopal", rating: 5, date: "5 months ago", text: "Excellent packaging during delivery. Not a single scratch on the furniture." },
    { id: 17, name: "Raghunath", rating: 4, date: "5 months ago", text: "Solid wood furniture. Much better than the engineered wood available online." },
    { id: 18, name: "Shanthi", rating: 5, date: "5 months ago", text: "Love the new wall shelves. Very easy to install and holds a lot of weight." },
    { id: 19, name: "Umesh Kumar", rating: 5, date: "6 months ago", text: "The bar cabinet is the highlight of my living room now. Everyone asks where I got it from." },
    { id: 20, name: "Geetha Rani", rating: 5, date: "6 months ago", text: "Professional behavior and quality products. Transparent pricing." },
    { id: 21, name: "Satish Babu", rating: 4, date: "6 months ago", text: "The sofa set is very comfortable. The cushions are high density and don't sink." },
    { id: 22, name: "Aruna Kumari", rating: 5, date: "7 months ago", text: "I bought a lounge chair for my balcony. It's the perfect spot for my morning coffee." },
    { id: 23, name: "Prabhakar Rao", rating: 5, date: "7 months ago", text: "No compromise on wood quality. Genuine Sheesham and Teak options." },
    { id: 24, name: "Nirmala Devi", rating: 5, date: "7 months ago", text: "Customer service is top priority for them. They fixed a minor hinge issue the next day." },
    { id: 25, name: "Ramakrishna", rating: 4, date: "8 months ago", text: "Good designs but limited stock in some colors. Had to wait for my sofa." },
    { id: 26, name: "Sujatha", rating: 5, date: "8 months ago", text: "Perfect finish. The color matches exactly with my other furniture." },
    { id: 27, name: "Bhaskar Reddi", rating: 5, date: "8 months ago", text: "Very reasonable prices for this level of craftsmanship." },
    { id: 28, name: "Indira", rating: 5, date: "9 months ago", text: "The dining chairs are very ergonomic. No back pain even after sitting for long hours." },
    { id: 29, name: "Gopalakrishnan", rating: 5, date: "9 months ago", text: "I recommend DesignCraft to all my friends. Truly premium stuff." },
    { id: 30, name: "Hema Malini", rating: 4, date: "9 months ago", text: "Elegant designs. The fabric choices are also very modern." },
    { id: 31, name: "Janardhan", rating: 5, date: "10 months ago", text: "Solid build. The furniture doesn't creak or wobble." },
    { id: 32, name: "Kasturi", rating: 5, date: "10 months ago", text: "The polish smell went away in a day. Very high quality materials used." },
    { id: 33, name: "Lingeswara Rao", rating: 5, date: "10 months ago", text: "Impressed by the variety available in the storage section." },
    { id: 34, name: "Mallikarjuna", rating: 5, date: "11 months ago", text: "The delivery team even cleaned the area after assembly. Very professional." },
    { id: 35, name: "Nagendra Babu", rating: 4, date: "11 months ago", text: "Value for money. The wood is thick and heavy." },
    { id: 36, name: "Om Prakash", rating: 5, date: "11 months ago", text: "Best decision to buy from DesignCraft for our new home." },
    { id: 37, name: "Parvathi", rating: 5, date: "1 year ago", text: "Timeless designs. My guests always compliment the dining table." },
    { id: 38, name: "Raja Mouli", rating: 5, date: "1 year ago", text: "Excellent craftsmanship. The joints are perfectly aligned." },
    { id: 39, name: "Savithri", rating: 5, date: "1 year ago", text: "Very durable. Even with kids and pets, the chairs are holding up well." },
    { id: 40, name: "Triveni", rating: 4, date: "1 year ago", text: "Good after-sales service. They follow up to ensure everything is fine." },
    { id: 41, name: "Vamsi Krishna", rating: 5, date: "1 year ago", text: "The lounge chairs are incredible. Very relaxing." },
    { id: 42, name: "Yashoda", rating: 5, date: "1 year ago", text: "Beautiful carvings on the bed. Looks like a heritage piece." },
    { id: 43, name: "Apparao", rating: 5, date: "1.2 years ago", text: "Strong and sturdy furniture. No issues so far." },
    { id: 44, name: "Bhanumathi", rating: 5, date: "1.2 years ago", text: "The finish is much better than what you see on websites like Pepperfry." },
    { id: 45, name: "Chandra Sekhar", rating: 4, date: "1.2 years ago", text: "Reasonable delivery charges for out of city orders." },
    { id: 46, name: "Dhanalakshmi", rating: 5, date: "1.3 years ago", text: "Very happy with my nested tables. Perfect for small apartments." },
    { id: 47, name: "Eswar Prasad", rating: 5, date: "1.3 years ago", text: "Top-notch wooden furniture in Hyderabad." },
    { id: 48, name: "Fathima Begum", rating: 5, date: "1.3 years ago", text: "Their designs for wall shelves are very innovative." },
    { id: 49, name: "Guruswamy", rating: 5, date: "1.4 years ago", text: "A legacy of good furniture. My parents also bought from them." },
    { id: 50, name: "Hemachandra", rating: 4, date: "1.4 years ago", text: "Consistent quality across all pieces. I've bought multiple items." }
];

const ReviewsSection = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const showMore = () => {
        setVisibleCount(reviewsData.length);
    };

    return (
        <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: '42px',
                        fontFamily: "'Playfair Display', serif",
                        color: 'var(--color-primary)',
                        marginBottom: '16px'
                    }}>Customer Stories</h2>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <div style={{ display: 'flex' }}>
                            {[1, 2, 3, 4, 5].map(star => (
                                <Star key={star} size={20} fill="var(--color-accent)" color="var(--color-accent)" />
                            ))}
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '18px' }}>4.9/5</span>
                        <span style={{ color: '#666' }}> (Based on 1.2k+ Reviews)</span>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginBottom: '40px'
                }}>
                    {reviewsData.slice(0, visibleCount).map((review) => (
                        <div
                            key={review.id}
                            style={{
                                padding: '30px',
                                borderRadius: '20px',
                                backgroundColor: '#FAF9F6',
                                border: '1px solid #eee',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff'
                                    }}>
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-primary)' }}>{review.name}</h4>
                                        <p style={{ fontSize: '12px', color: '#999' }}>{review.date}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Star
                                            key={star}
                                            size={14}
                                            fill={star <= review.rating ? "var(--color-accent)" : "none"}
                                            color="var(--color-accent)"
                                        />
                                    ))}
                                </div>
                            </div>
                            <p style={{
                                fontSize: '15px',
                                color: '#555',
                                lineHeight: '1.6',
                                fontStyle: 'italic'
                            }}>
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                {visibleCount < reviewsData.length && (
                    <div style={{ textAlign: 'center' }}>
                        <button
                            onClick={showMore}
                            style={{
                                backgroundColor: 'transparent',
                                border: '2px solid var(--color-primary)',
                                color: 'var(--color-primary)',
                                padding: '12px 30px',
                                borderRadius: '50px',
                                fontWeight: 600,
                                fontSize: '16px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                e.currentTarget.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'var(--color-primary)';
                            }}
                        >
                            Show More Reviews <ChevronDown size={20} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ReviewsSection;
