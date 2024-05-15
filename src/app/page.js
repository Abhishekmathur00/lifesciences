import Banner from "@/components/Homepage/Banner";
import Inquiryform from "@/components/Homepage/Inquiryform";
import Last from "@/components/Homepage/Last";
import Management from "@/components/Homepage/Management";
import Offerings from "@/components/Homepage/Offerings";
import WhychooseUs from "@/components/Homepage/WhychooseUs";
import Information from "@/components/Homepage/information";
import Products from "@/components/Homepage/products";
import Videosection from "@/components/Homepage/videosection";
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
