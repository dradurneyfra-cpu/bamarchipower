import chandelierGoldRing from "@/assets/elec-chandelier-gold-ring.jpg.asset.json";
import crystalChandelier from "@/assets/elec-crystal-chandelier.jpg.asset.json";
import goldPendantLight from "@/assets/elec-gold-pendant-light.jpg.asset.json";
import switchesBlack from "@/assets/elec-switches-sockets-black.jpg.asset.json";
import switchesGold from "@/assets/elec-switches-sockets-gold.jpg.asset.json";
import wallLighting from "@/assets/elec-wall-lighting.jpg.asset.json";
import solarRoof1 from "@/assets/solar-rooftop-install-1.jpg.asset.json";
import solarRoof2 from "@/assets/solar-rooftop-install-2.jpg.asset.json";
import inverterUnit from "@/assets/solar-inverter-unit.jpg.asset.json";
import inverterController from "@/assets/solar-inverter-controller.jpg.asset.json";
import dcWiring from "@/assets/solar-dc-wiring-protection.jpg.asset.json";
import archDrawingSet from "@/assets/arch-drawing-set.jpg.asset.json";
import archMosqueModel from "@/assets/arch-mosque-model.jpg.asset.json";
import archCaseStudy from "@/assets/arch-case-study.jpg.asset.json";
import archDeductions from "@/assets/arch-design-deductions.jpg.asset.json";
import logoLight from "@/assets/bam-logo-light.jpg.asset.json";
import logoDark from "@/assets/bam-logo-dark.jpg.asset.json";

export const LOGO_LIGHT = logoLight.url;
export const LOGO_DARK = logoDark.url;

export const CONTACT = {
  phoneDisplay: "+234 916 857 3727",
  phoneHref: "tel:+2349168573727",
  whatsappDisplay: "+234 902 971 5719",
  whatsappHref:
    "https://wa.me/2349029715719?text=" +
    encodeURIComponent(
      "Hello BAM ARCHIPOWER SOLUTION, I visited your website and would like to discuss a project with you.",
    ),
  location: "Shaki West LGA, Ijale Oda, Oyo State, Nigeria",
};

export type Category = "Electrical" | "Architecture" | "Solar & Inverter" | "Construction";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: Category;
};

/**
 * Project media, grouped by service category.
 * To move an image to another service, change its `category` value below.
 */
export const GALLERY: GalleryItem[] = [
  {
    src: solarRoof1.url,
    alt: "Rooftop solar panel array being installed on a metal roof",
    caption: "Rooftop solar panel installation",
    category: "Solar & Inverter",
  },
  {
    src: archDrawingSet.url,
    alt: "Architectural drawing set showing floor plan, roof plan, elevations, section and site plan of a four bedroom bungalow",
    caption: "Four-bedroom bungalow drawing set",
    category: "Architecture",
  },
  {
    src: chandelierGoldRing.url,
    alt: "Gold ring pendant light fitted to a ceiling with wiring connections",
    caption: "Decorative ring pendant installation",
    category: "Electrical",
  },
  {
    src: solarRoof2.url,
    alt: "Technician running solar cabling across a rooftop solar array",
    caption: "Solar array cabling on site",
    category: "Solar & Inverter",
  },
  {
    src: switchesBlack.url,
    alt: "Wall-mounted black switches and socket outlets on a marble finish wall",
    caption: "Switches and socket outlets",
    category: "Electrical",
  },
  {
    src: archMosqueModel.url,
    alt: "Physical architectural model of a proposed central mosque and its site arrangement",
    caption: "Central Mosque design project — physical model",
    category: "Architecture",
  },
  {
    src: wallLighting.url,
    alt: "Decorative wall lighting fixtures switched on inside a showroom",
    caption: "Decorative wall lighting",
    category: "Electrical",
  },
  {
    src: dcWiring.url,
    alt: "Solar DC wiring, breakers and protection components mounted on a wall",
    caption: "System wiring and protection components",
    category: "Solar & Inverter",
  },
  {
    src: crystalChandelier.url,
    alt: "Crystal chandelier fixture installed on a ceiling",
    caption: "Crystal chandelier fitting",
    category: "Electrical",
  },
  {
    src: archCaseStudy.url,
    alt: "Hand-drafted central mosque floor plan with case study photographs attached",
    caption: "Case-study documentation and floor planning",
    category: "Architecture",
  },
  {
    src: inverterController.url,
    alt: "Inverter and charge controller display units mounted side by side",
    caption: "Inverter and controller set-up",
    category: "Solar & Inverter",
  },
  {
    src: goldPendantLight.url,
    alt: "Gold and crystal pendant light connected to ceiling wiring",
    caption: "Pendant light fitting",
    category: "Electrical",
  },
  {
    src: archDeductions.url,
    alt: "Document of architectural design deductions developed from case-study research",
    caption: "Design deductions from case-study research",
    category: "Architecture",
  },
  {
    src: switchesGold.url,
    alt: "Gold-framed switches and socket outlets displayed on a wall",
    caption: "Switch and socket finishing",
    category: "Electrical",
  },
  {
    src: inverterUnit.url,
    alt: "Inverter unit installed on an interior wall",
    caption: "Inverter unit installation",
    category: "Solar & Inverter",
  },
];

export const HERO_IMAGE = solarRoof1.url;
export const ABOUT_IMAGE = archMosqueModel.url;

export const SERVICE_IMAGES: Record<string, string> = {
  Electrical: chandelierGoldRing.url,
  Architecture: archDrawingSet.url,
  "Solar & Inverter": solarRoof2.url,
};
