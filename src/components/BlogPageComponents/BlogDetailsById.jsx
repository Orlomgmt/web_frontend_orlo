import React from "react";
import LaundryImg from "../../images/laundryShop.jpeg";
import SideImageCloth from "../../images/sideImageCloth.png";
import RecentBlogSection from "./RecentBlogSection";
import { FaArrowLeft } from "react-icons/fa6";

const BlogDetailsById = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center mt-32">
      <div className="w-[80%] lg:w-[90%] xl:w-[90%] mx-auto flex flex-col items-start gap-5">
        <a href="/blogs">
          <FaArrowLeft size={20} />
        </a>
        <img
          src={LaundryImg}
          alt="Laundry Shop"
          className="w-full h-auto max-h-[600px]"
        />
      </div>
      <div className="w-[80%] lg:w-[80%] xl:w-[90%] flex flex-col items-start gap-6 mt-8">
        <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-customGray-400">
          Cleaning in the 21st Century
        </h1>
        <div className="flex flex-row w-[80%] md:w-[50%] justify-between gap-2">
          <p className="text-xs md:text-xl text-customGray-400 font-bold">
            Written by John Doe
          </p>
          <p className="text-xs md:text-xl text-customGray-lightText">
            Monday May 20, 2024
          </p>
        </div>
        <div className="w-full flex flex-col gap-10">
          <section className="w-full">
            <p className=" text-black text-[12px] md:text-[20px] font-Avenir font-normal text-justify ">
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
          </section>
          <section className="w-full">
            <p className=" text-black text-[20px] font-Avenir font-normal text-justify">
              1914 translation by H. Rackham "But I must explain to you how all
              this mistaken idea of denouncing pleasure and praising pain was
              born and I will give you a complete account of the system, and
              expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because it is pleasure, but because
              those who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful. Nor again is there anyone
              who loves or pursues or desires to obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure. To take a
              trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses to enjoy a pleasure
              that has no annoying consequences, or one who avoids a pain that
            </p>
          </section>
          <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="lg:w-[55%]">
              <p className="text-black text-[20px] font-Avenir font-normal text-justify">
                Section 1.10.33 of "de Finibus Bonorum et Malorum" "At vero eos
                et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum
                soluta nobis est eligendi optio cumque nihil impedit quo minus
                id quod maxime placeat facere possimus, omnis voluptas assumenda
                est, omnis dolor repellendus. Temporibus autem quibusdam et aut
                officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae. Itaque
                earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus
                asperiores repellat." circumstances occur in which toil and pain
                can procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it? But who has any right to find
                fault with a man who chooses to enjoy a pleasure that has no
                annoying consequences, or one who avoids a pain that produces no
                resultant pleasure?"
              </p>
            </div>
            <img
              src={SideImageCloth}
              alt="SideImageCloth"
              className="lg:w-[40%] h-auto max-h-[400px]"
            />
          </section>
          <section className="w-full">
            <p className=" text-black text-[20px] font-Avenir font-normal text-justify">
              Section "At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti atque
              corrupti quos dolores et quas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
              quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit
              quo minus id quod maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
              et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
              et voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat."=happiness. No one rejects, dislikes, or
              avoids pleasure itself, because it is pleasure, but because those
              who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful. Nor again is there anyone
              who loves or pursues or desires to obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure. To take a
              trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses to enjoy a pleasure
              that has no annoying consequences, or one who avoids a pain that
              produces no resultant pleasure?"
            </p>
          </section>
        </div>
      </div>
      <RecentBlogSection />
    </main>
  );
};

export default BlogDetailsById;
