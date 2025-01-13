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
import { ImageURL } from "../models";

interface IServicesSectionData {
  data: {
    type: ServicesTypes;
    imageUrl: ImageURL;
    subService: string[];
    additionalFeatures?: string[];
  }[];
  galleryImages: ImageURL[];
}

export const servicesSectionData: IServicesSectionData = {
  galleryImages: [
    {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
    },
    {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
    },
    {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
    },
    {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
    },
    {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
    },
    {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls8-YanyxvrjE3cJkPqe.webp",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls8-YanyxvrjE3cJkPqe.webp",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls8-YanyxvrjE3cJkPqe.webp",
    },
  ],
  data: [
    {
      type: ServicesTypes.HVAC,
      subService: Object.values(HVACServices),
      additionalFeatures: Object.values(HVACAdditionalFeatures),
      imageUrl: {
        large:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
        medium:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
        small:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
      },
    },
    {
      type: ServicesTypes.Electrical,
      subService: Object.values(ElectricalServices),
      additionalFeatures: Object.values(ElectricalAdditionalFeatures),
      imageUrl: {
        large:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
        medium:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
        small:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
      },
    },
    {
      type: ServicesTypes.FireSafety,
      subService: Object.values(FireSafetyServices),
      additionalFeatures: Object.values(FireSafetyAdditionalFeatures),
      imageUrl: {
        large:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
        medium:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
        small:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
      },
    },
    {
      type: ServicesTypes.Plumbing,
      subService: Object.values(PlumbingServices),
      additionalFeatures: Object.values(PlumbingAdditionalFeatures),
      imageUrl: {
        large:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
        medium:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
        small:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
      },
    },
    {
      type: ServicesTypes.Surveillance,
      subService: Object.values(SurveillanceServices),
      additionalFeatures: Object.values(SurveillanceAdditionalFeatures),
      imageUrl: {
        large:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
        medium:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
        small:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls9-AE0onN1NR2T4n2L9.webp",
      },
    },
    {
      type: ServicesTypes.Maintenance,
      subService: Object.values(MaintenanceServices),
      additionalFeatures: Object.values(MaintenanceAdditionalFeatures),
      imageUrl: {
        large:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls8-YanyxvrjE3cJkPqe.webp",
        medium:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls8-YanyxvrjE3cJkPqe.webp",
        small:
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=280,fit=crop/YrDlZMrOaPuW2xBy/blackpearls8-YanyxvrjE3cJkPqe.webp",
      },
    },
  ],
};
