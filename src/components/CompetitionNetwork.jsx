import artBoard from "../pics/Artboard.png";

import React from "react";

const CompetitionNetwork = ({ language }) => {
  return (
    <div className="relative bg-[#00567D] py-16 mb-[10rem] ">
      <div className=" mx-auto px-4 flex justify-center gap-8 mb-24 ">
        {/* Arabic Section */}
        {language === "ar" && (
          <div className="bg-[#E2ECF0] text-[#00567D] p-6 rounded-md shadow-lg w-full max-w-[1128px]">
            <h2 className="text-[36px] font-bold leading-[36px] text-right text-[#0069A7] leftLineOnText mb-4">
              شبكة المنافسة العربية
            </h2>
            <div className="text-lg leading-relaxed text-right">
              <ol className="list-decimal list-inside mt-4 [&>li]:my-4 [&>li]:text-[20px] [&>li]:font-normal [&>li]:leading-[26.2px]  text-[#0069A7] ">
                <li>
                  تم إنشاء شبكة المنافسة العربية بناءً على مبادرة المجلس
                  الاقتصادي والاجتماعي لجامعة الدول العربية، والذي كلف لجنة
                  السياسات الاقتصادية التابعة له بإعداد خطة عمل لتنفيذ الشبكة.
                </li>
                <li>
                  تسعى شبكة المنافسة العربية إلى تحقيق التنمية الاقتصادية
                  والاجتماعية من خلال تعزيز السياسات التنافسية الفعالة.
                </li>
                <li>
                  تهدف الشبكة إلى تعزيز التعاون والتنسيق بين الدول الأعضاء في
                  مجال المنافسة وتشجيع التوافق والتكامل.
                </li>
                <li>
                  تتألف الشبكة من ممثلين عن هيئات المنافسة من الدول العربية بهدف
                  تبادل الخبرات وتحقيق التكامل الاقتصادي.
                </li>
                <li>
                  تهدف الشبكة إلى تطوير العلاقات الاقتصادية الإقليمية وتنسيق
                  السياسات الاقتصادية بما يتوافق مع التوجهات العالمية.
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* English Section */}
        {language === "en" && (
          <div className="bg-[#E2ECF0] text-[#00567D] p-6 rounded-md shadow-lg w-full max-w-[1128px]">
            <h2 className="text-[36px] font-bold leading-[36px] text-right text-[#0069A7] leftLineOnText mb-4   ">
              Arab Competition Network
            </h2>
            <div className="text-lg leading-relaxed text-left">
              <ol className="list-decimal list-inside mt-4 [&>li]:my-4 [&>li]:text-[20px] [&>li]:font-normal [&>li]:leading-[26.2px]  text-[#0069A7]  ">
                <li>
                  The Arab Competition Network was established based on an
                  initiative of the Economic and Social Council of the League of
                  Arab States, which tasked its Economic Policy Committee with
                  preparing an action plan for the implementation of the
                  network.
                </li>
                <li>
                  The Arab Competition Network aims to achieve economic and
                  social development by promoting effective competition
                  policies.
                </li>
                <li>
                  It seeks to enhance cooperation and coordination among member
                  states in the area of competition and encourage harmonization
                  and integration.
                </li>
                <li>
                  The network comprises representatives from competition
                  authorities of Arab countries, aiming to exchange experiences
                  and promote economic integration.
                </li>
                <li>
                  The network strives to develop regional economic relations and
                  align economic policies with global trends.
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>

      <img
        src={artBoard}
        alt=""
        className="absolute bottom-[-120px] z-[4] bg-transparent  w-full  "
      />
    </div>
  );
};

export default CompetitionNetwork;