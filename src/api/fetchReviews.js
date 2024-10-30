
const fetchReviews = async (isbn, newReview) => {
    try {
        await fetch(`https://backend-trabalho-final-bd.vercel.app/api/livros/review/${isbn}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...newReview}), 
        });
    } catch (error) {
        console.error("Erro ao enviar review:", error);
    }
};

export default fetchReviews;