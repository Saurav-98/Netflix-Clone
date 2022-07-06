import React from "react";

import "./Banner.css";

const Banner = () => {
  function truncateDesc(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e6eab654362267.5958694758bbb.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncateDesc(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, magnam esse quia ducimus exercitationem ratione eaque adipisci? Nesciunt veniam odit nihil, omnis dolore repellat at similique laboriosam. Veritatis, consequatur facere necessitatibus tempora corporis eaque quibusdam ipsa soluta. Deserunt dolor, mollitia ullam facilis necessitatibus quo vitae aut eius facere fugit doloribus magni ad, consectetur eos repellat? In reprehenderit assumenda omnis architecto quidem tempore iure quam, nam aut! Quis sit blanditiis aut, voluptate harum nulla repellat tenetur quaerat possimus neque hic voluptatem consectetur temporibus quidem quas mollitia obcaecati consequuntur sunt voluptates inventore! Fugit consectetur sapiente pariatur asperiores soluta, atque minus at expedita inventore ex reprehenderit. Facere quod aperiam neque impedit suscipit, tempore repellat voluptates architecto fugit sunt nesciunt tempora cum accusantium culpa illum debitis quia temporibus consequatur, similique commodi eius odio dolores consectetur. Optio dolorem possimus adipisci veritatis distinctio unde aspernatur quod, inventore minus exercitationem error, ratione eos harum veniam! Facere et consectetur molestias non inventore dolor magni alias reprehenderit nostrum fuga praesentium eveniet quibusdam, dicta quia beatae esse ea optio culpa! Dicta reprehenderit eum at ipsum laboriosam ex vero alias magni corporis, culpa aspernatur odio non iusto quo tenetur nobis praesentium accusantium nostrum possimus dignissimos, qui cum! Facere deleniti hic magni.",
            150
          )}
        </h2>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
