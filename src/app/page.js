// import Banner from "@/components/homepage/Banner";
// import Inquiryform from "@/components/homepage/Inquiryform";
// import Last from "@/components/homepage/Last";
import Management from "../components/homepage/Management";
import Offerings from "@/components/homepage/Offerings";
import WhychooseUs from "@/components/homepage/WhychooseUs";
import Information from "@/components/homepage/Information";
import Products from "@/components/homepage/Products";
import Videosection from "@/components/homepage/Videosection";
export default function Home() {
  return (
    <div>
      <Banner />
      <WhychooseUs />
      <Videosection />
      <Offerings />
      <Information />
      <Products />
      <Inquiryform />
      <Management />
      <Last />
    </div>
  );
}
