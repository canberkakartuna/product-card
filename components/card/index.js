import React from "react";
import { BsDot } from "react-icons/bs";
import {
  AiFillHome,
  AiFillStar,
  AiOutlineCreditCard,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { BiPackage } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { RiArrowGoBackLine } from "react-icons/ri";
import { IoShareOutline } from "react-icons/io5";
import { SiAdguard } from "react-icons/si";

import styles from "@/styles/Card.module.css";

export default function Card() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <div className={styles.productImage}>
            <div className={styles.imageDots}>
              <BsDot
                size={20}
                style={{
                  color: "#fff",
                }}
              />
              <BsDot
                size={20}
                style={{
                  color: "#fff",
                }}
              />
              <BsDot
                size={20}
                style={{
                  color: "#fff",
                }}
              />
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
          <h3>Galaxy Note 20 Ultra 5G 256GB Mystic Bronze (SM-N986BZKABTU)</h3>
          <div className={styles.tag}>
            <strong>SIFIR AYARINDA</strong>
          </div>
          <div className={styles.tag + " " + styles.dark}>
            <SiAdguard size={20} />
            <sup>
              <small>GARANTİLİ</small>
            </sup>
          </div>
        </div>
        <div className={styles.sellerNote}>
          <span>
            İlk günden beri kullanılmamıştır. Kutusu ve aksesuarları mevcuttur.
          </span>
          <div className={styles.sellerScoreContainer}>
            <span>
              <RxPerson size={20} />
              Satıcı:
            </span>
            <span>
              <strong>Mustafa D***</strong>
            </span>
            <span className={styles.sellerScoreTag}>
              <AiFillStar size={15} />
              8.3
            </span>
          </div>
        </div>
        <div className={styles.price}>
          <h1>
            6.999,
            <sub>
              <small>00</small>
            </sub>
          </h1>
          <div className={styles.oldPriceContainer}>
            <div className={styles.oldPrice}>
              <strong>7.999,00 TL</strong>
            </div>
            <div className={styles.discountRate}>12,5% bizden olsun</div>
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
              800 * 6 aya kadar taksit
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
            <AiOutlineHeart size={25} />
          </div>
          <div className={styles.button}>Hemen Al</div>
        </div>
      </div>
    </>
  );
}
