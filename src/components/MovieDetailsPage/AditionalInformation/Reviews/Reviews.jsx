import { Container, Author } from "./Reviews.styled";

export default function Reviews({ reviewsList }) {
  return (
    <Container>
      {reviewsList &&
        (reviewsList.length === 0 ? (
          <h2>No reviews</h2>
        ) : (
          <ul>
            {reviewsList.map((review) => (
              <li key={review.id}>
                <Author>{review.author}</Author>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ))}
    </Container>
  );
}
