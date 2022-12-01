import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  AiFillHome,
  AiFillStar,
  AiOutlineCreditCard,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { BiPackage } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { RiArrowGoBackLine } from "react-icons/ri";
import { IoShareOutline } from "react-icons/io5";

import styles from "@/styles/Card.module.css";

export default function Card(props = {}) {
  const { description, itemName, instalment, tag, seller, price, sliderImage } =
    props;
  const [isFavourite, setIsFavourite] = useState(false);
  const [slideImageIndex, setSlideImageIndex] = useState(0);

  const numberWithCommas = (num = 0) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleSlide = (index) => {
    if (index === 1) {
      if (slideImageIndex < sliderImage.length - 1) {
        setSlideImageIndex(slideImageIndex + 1);
      } else {
        setSlideImageIndex(0);
      }
    }
    if (index === -1) {
      if (slideImageIndex > 0) {
        setSlideImageIndex(slideImageIndex - 1);
      } else {
        setSlideImageIndex(sliderImage.length - 1);
      }
    }
  };

  return (
    <>
      <div className={styles.card}>
        <div
          className={styles.imageContainer}
          style={{
            background: 'url("' + sliderImage[slideImageIndex].imageUrl + '")',
          }}
        >
          <div className={styles.arrowContainer}>
            <div className={styles.back} onClick={() => handleSlide(-1)}>
              <MdArrowBackIos
                size={25}
                style={{
                  color: "#fff",
                }}
              />
            </div>
            <div className={styles.forward} onClick={() => handleSlide(1)}>
              <MdArrowForwardIos
                size={25}
                style={{
                  color: "#fff",
                }}
              />
            </div>
          </div>
          <div className={styles.productImage}>
            <div className={styles.imageDots}>
              {sliderImage.map((_, index) => {
                return (
                  <BsDot
                    key={index}
                    size={25}
                    style={{
                      color: "#fff",
                      opacity: index === slideImageIndex ? 1 : 0.5,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.breadcrumbContainer}>
          <span className={styles.breadcrumbItem}>
            <AiFillHome size={20} />
            <MdArrowForwardIos size={10} />
          </span>
          <span className={styles.breadcrumbItem}>
            Telefon
            <MdArrowForwardIos size={10} />
          </span>
          <span className={styles.breadcrumbItem}>
            Cep Telefonu
            <MdArrowForwardIos size={10} />
          </span>
          <span className={styles.breadcrumbItem}>Apple Cep Telefonu</span>
        </div>

        <div className={styles.content}>
          <span>
            Apple
            <MdArrowForwardIos size={10} />
          </span>
          <h3>{itemName}</h3>
          {tag &&
            Array.isArray(tag) &&
            tag.map((item, index) => {
              return (
                <div
                  className={styles.tag}
                  key={index}
                  style={{
                    backgroundColor: item?.tagBackgroundColor,
                    color: item?.tagTextColor,
                  }}
                >
                  {item?.tagName}
                </div>
              );
            })}
        </div>
        <div className={styles.sellerNote}>
          <span>{description}</span>
          <div className={styles.sellerScoreContainer}>
            <span>
              <RxPerson size={20} />
              Satıcı:
            </span>
            <span>
              <strong>{seller?.name}</strong>
            </span>
            <span className={styles.sellerScoreTag}>
              <AiFillStar size={15} />
              <strong>{seller?.rating}</strong>
            </span>
          </div>
        </div>
        <div className={styles.price}>
          <h1>
            {numberWithCommas(price)},
            <sub>
              <small>00</small>
            </sub>
          </h1>
          <div className={styles.oldPriceContainer}>
            <div className={styles.oldPrice}>
              <strong>6.780,00</strong>
            </div>
            <div className={styles.discountRate}>%5 bizden olsun</div>
          </div>
        </div>

        <div className={styles.featuresContainer}>
          <div className={styles.feature}>
            <BiPackage size={25} />
            <span>Ücretsiz Kargo</span>
          </div>
          <div className={styles.feature}>
            <AiOutlineCreditCard size={25} />
            <span
              style={{
                textDecoration: "underline",
              }}
            >
              {instalment}
            </span>
          </div>
          <div className={styles.feature}>
            <RiArrowGoBackLine size={25} />
            <span
              style={{
                textDecoration: "underline",
              }}
            >
              Paran Güvende
            </span>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.iconButton}>
            <IoShareOutline size={25} />
          </div>
          <div className={styles.iconButton}>
            {isFavourite ? (
              <AiFillHeart
                size={25}
                style={{
                  color: "#f00",
                }}
                onClick={() => setIsFavourite(!isFavourite)}
              />
            ) : (
              <AiOutlineHeart
                size={25}
                onClick={() => setIsFavourite(!isFavourite)}
              />
            )}
          </div>
          <div className={styles.button}>Hemen Al</div>
        </div>
      </div>
    </>
  );
}
