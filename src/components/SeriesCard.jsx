/* eslint-disable no-unused-vars */
import styled from "styled-components";
import styles from "./Netflix.module.css"

export default function SeriesCard({data}) {
    // const {img_url,name, rating, description,genre, cast, watch_url} = props.data;
    // eslint-disable-next-line no-unused-vars
    const {id,img_url,name, rating, description,genre, cast, watch_url} = data;
    // console.log(data)

    // const btn_style = {
    //   padding:"1.2rem 2.4rem",
    //   border: "none",
    //   fontSize: "1.6rem",
    //   backgroundColor : `${rating >= 8.5 ? "#7dcea0":"#f7dc6f"}`,
    //   color: "var(--btn-color)",
    //   fontWeight:"bold",
    //   cursor:"pointer",
    // };

    // const Button = styled.button({
    //   padding:"1.2rem 2.4rem",
    //   border: "none",
    //   fontSize: "1.6rem",
    //   backgroundColor : `${rating >= 8.5 ? "#7dcea0":"#f7dc6f"}`,
    //   color: "var(--btn-color)",
    //   fontWeight:"bold",
    //   cursor:"pointer",
    // });

    const Button = styled.button`
      padding: 1.2rem 2.4rem;
      border: none;
      font-size: 1.6rem;
      background-color : ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
      color: var(--btn-color);
      font-weight: bold;
      cursor: pointer;
    `;

    const Rating = styled.h3`
    font-size: 1.6rem;
    color:#7dcea0;
    text-transform:capitalize
    `;

    const ratingClass = rating >= 8.5 ? styles.super_hit:styles.avergae;

  return (
    <li className={styles.card}>
      <div>
        <img
          src={img_url}
          alt={name}
          width="40%"
          height="40%"
        />
      </div>
      <div className={styles['card-content']}>
        <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]"></div>
      <h2>Name: {name}</h2>
      <Rating>Rating:  <span className={`${styles.rating} , ${ratingClass}`}> {rating}</span></Rating>
      <p className="text-3xl font-bold underline text-cyan-300">Summary: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast : {cast}</p>
      <a href={watch_url} target="_blank">
        <Button rating={rating}>Watch Now</Button>
      </a>
      </div>
      {/* <button>{age>=18 ? "Watch Now":"Not Available"}</button> */}
    </li>
  );
}
