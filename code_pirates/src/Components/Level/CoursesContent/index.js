import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

class CoursesContent extends Component {
  render() {
    return (
      <div className="col-12 content-container mt-5">
        <div className="col-12 content-header">
          <div className="row">
            <div className="col-6 text-right" style={{ fontSize: "40px" }}>
              أساسيات اللغة
            </div>
            <div className="col-6 text-left">
              <button className="col-5 ml-4 content-start-btn">
                <Link
                  to={
                    this.props.levels[0].isAvailable &&
                    `/level/${this.props.levels[0].id}`
                  }
                  style={{ color: "#1fc997", textDecoration: "none" }}
                >
                  ابدأ التحدي
                </Link>
              </button>
              <Link
                to={"/levels"}
                style={{ color: "#16ab7f", textDecoration: "none" }}
              >
                <span
                  className=" mr-4"
                  style={{ fontSize: "30px", color: "#fff" }}
                >
                  رجوع
                </span>
                <button className="col-1 ml-1 content-back-btn">
                  <FontAwesomeIcon
                    style={{ color: "#fff", fontSize: "40px" }}
                    icon={faAngleLeft}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className="row justify-content-center">
            <div className="col-11 text-right">
              <div className="content-title">لماذا نتعلم HTML ؟</div>
              <br />
              <div className="content-body">
                <span>
                  <span className="tag">HTML</span> هي أساس كل لغات تطوير الويب،
                  وبدونها لن نكون قادرين على التعامل مع النصوص والصور
                  والفيديوهات على صفحات الويب.
                </span>
                <span>
                  <span>
                    {" "}
                    تعتبر <span className="tag"> HTML</span> لغة وصفية لأنها تصف
                    مكونات صفحات الويب عن طريق الوسوم{" "}
                    <span className="tag">
                      {" "}
                      <q>Tags</q>
                    </span>
                    ، وهي بداية كل شي تحتاج لتعلمه لتستطيع برمجة صفحات ويب
                    جذابة.
                  </span>
                </span>
              </div>
              <br />
              <br />

              <div className="content-title">ماهي الوسوم Tags ؟</div>
              <br />
              <div className="content-body">
                <span>
                  الوسوم{" "}
                  <span className="tag">
                    <q>Tags</q>
                  </span>{" "}
                  هي مجموعة من العناصر يتم استخدامها لعرض محتوى الصفحة والتأثير
                  عليه.
                </span>
                <br />
              </div>
              <br />
              <br />

              <div className="content-title">الهيكل العام لصفحات الويب</div>
              <br />
              <div className="content-body">
                <span>
                  هكذا يبدو الهيكل العام لأي صفحة ويب على شبكة الانترنت.
                </span>
                <br />
                <br />

                <div
                  className="col-12 text-left "
                  style={{
                    marginLeft: "3%",
                    backgroundColor: "#282c33",
                    padding: "20px 40px 20px 40px",
                    width: "100%",
                    borderRadius: "10px",
                    color: "#fff",
                    marginTop: "15px"
                  }}
                >
                  <code
                    style={{
                      color: "#fff"
                    }}
                  >
                    <span>
                      {`<DOCTYPE html!>`}
                      <br />
                      {`<html>`}
                      <br />
                      <br />
                      {`<head>`}
                      <br />
                      <span style={{ marginLeft: "20px" }}>
                        {`<title/>عنوان الصفحة<title>`}
                      </span>
                      <br />
                      {`<head/>`}
                      <br />
                      <br />
                      {`<body>`}
                      <br />
                      <span style={{ marginLeft: "20px" }}>
                        {`<p/>أهلا وسهلا<p>`}
                      </span>
                      <br />
                      {`<body/>`}
                      <br />
                      <br />
                      {`<html/>
                      `}
                    </span>
                  </code>
                </div>
                <br />
                <ul>
                  <li className="mr-4">
                    <span>
                      يقوم الوسم{" "}
                      <span className="tag">{`<DOCTYPE html!>`}</span> بتعريف
                      نوع الصفحة ليسهل على المتصفح عرض صفحات HTML عرضا صحيحا.
                    </span>
                  </li>
                  <li className="mr-4">
                    <span>
                      <span className="tag">{`<html> </html>`}</span> هو الوسم
                      الرئيسي في كل صفحة ويب ويحتوي على جميع الوسوم <q>Tags</q>{" "}
                      بداخله، بين بداية الوسم{" "}
                      <span className="tag">{`<html>`}</span> ونهاية الوسم{" "}
                      <span className="tag">{`<html/>`}</span>
                    </span>
                  </li>
                  <li className="mr-4">
                    <span>
                      الوسم <span className="tag">{`<head> </head>`}</span>{" "}
                      يحتوي على معلومات وتعاريف الصفحة كما يحتوي بداخله على
                      الوسم
                      <span className="tag">{`<title> </title>`}</span> والذي
                      يمثل عنوان الصفحة الذي يتم عرضه في المتصفح.
                    </span>
                  </li>
                  <li className="mr-4">
                    <span>
                      الوسم <span className="tag">{`<title> </title>`}</span>{" "}
                      يجب أن يكون مُضمّنا داخل وسم
                      <span className="tag">{`<head> </head>`}</span>
                    </span>
                  </li>
                  <li className="mr-4">
                    <span>
                      الوسم <span className="tag">{`<body> </body>`}</span>{" "}
                      يحتوي على كل العناصر المعروضة في الصفحة، ويجب إضافة كل
                      الوسوم التي نرغب بعرضها في صفحة الويب داخل الوسم{" "}
                      <span className="tag">{`<body></dody>`}</span> كما فعلنا
                      مع الوسم <span className="tag">{`<p></p>`}</span>
                    </span>
                  </li>
                </ul>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    levels: state.levelsReducer.levels
  };
};

export default connect(mapStateToProps)(CoursesContent);
