import {
  ElectricalAdditionalFeatures,
  ElectricalServices,
  FireSafetyAdditionalFeatures,
  FireSafetyServices,
  HVACAdditionalFeatures,
  HVACServices,
  MaintenanceAdditionalFeatures,
  MaintenanceServices,
  PlumbingAdditionalFeatures,
  PlumbingServices,
  ServicesTypes,
  SurveillanceAdditionalFeatures,
  SurveillanceServices,
} from "../enums";

export const servicesSectionData: {
  type: ServicesTypes;
  imageUrl: string;
  subService: string[];
  additionalFeatures?: string[];
  galleryImages: string[];
}[] = [
  {
    type: ServicesTypes.HVAC,
    subService: Object.values(HVACServices),
    additionalFeatures: Object.values(HVACAdditionalFeatures),
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
    galleryImages: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
    ],
  },
  {
    type: ServicesTypes.Electrical,
    subService: Object.values(ElectricalServices),
    additionalFeatures: Object.values(ElectricalAdditionalFeatures),
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
    galleryImages: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
    ],
  },
  {
    type: ServicesTypes.FireSafety,
    subService: Object.values(FireSafetyServices),
    additionalFeatures: Object.values(FireSafetyAdditionalFeatures),
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
    galleryImages: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
    ],
  },
  {
    type: ServicesTypes.Plumbing,
    subService: Object.values(PlumbingServices),
    additionalFeatures: Object.values(PlumbingAdditionalFeatures),
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
    galleryImages: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
    ],
  },
  {
    type: ServicesTypes.Surveillance,
    subService: Object.values(SurveillanceServices),
    additionalFeatures: Object.values(SurveillanceAdditionalFeatures),
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
    galleryImages: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
    ],
  },
  {
    type: ServicesTypes.Maintenance,
    subService: Object.values(MaintenanceServices),
    additionalFeatures: Object.values(MaintenanceAdditionalFeatures),
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls8-YanyxvrjE3cJkPqe.webp",
    galleryImages: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
    ],
  },
];
