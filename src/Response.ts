export interface RecordResponse {
  count: number
  results: LandDataResult[]
  next: number | null
  previous: number | null
}

export interface LandDataResult {
  id: number
  land_media: LandMedia[]
  land_bookmark_data: LandBookmarkData[]
  water_source_data: WaterSourceData[]
  land_zone_data: LandZoneData[]
  state_name: string
  district_name: string
  mandal_name: string
  village_name: string
  seller: Seller
  created_by: CreatedBy
  is_shortlisted: boolean
  is_basic_verified: boolean
  total_land_size_in_acres: TotalLandSizeInAcres
  price_per_acre_crore: PricePerAcreCrore
  slug: string
  is_exact: boolean
  tags: Tag[]
  description: string
  total_price: number
  price_per_acre: number
  total_land_size: number
  lat: string
  long: string
  is_chance: boolean
  status: string
  is_physically_verified: boolean
  approach_road: boolean
  fencing: boolean
  crop_type: null | string
  soil_type: string
  created_at: string
  updated_at: string
  location_link: string
  approximate_location_link: string
  survey_number: string
  electricity: boolean
  existing_structure: null
  additional_info: null
  approach_road_length: number
  approach_road_type: string
  fencing_description: string
  disclaimer: null | string
  status_change_reason: null | string
  distance_from_orr: number
  deprecated_tags: null | string
  land_certificate: null | string
  state: number
  district: number
  mandal: number
  village: number
}

export interface LandMedia {
  id: number
  video: null | string
  image: string
  media_type: string
  category: string
  created_at: string
  updated_at: string
}

interface LandBookmarkData {
  id: number
  one_acre_premium: boolean
  chance: boolean
  site_verification: boolean
  investors: boolean
}

interface WaterSourceData {
  id: number
  well: boolean
  canal: boolean
  drip: boolean
  sprinkler: boolean
  bore_well: boolean
  stream: boolean
}

interface LandZoneData {
  id: number
  mumbai_highway: boolean
  shankarpally_road: boolean
  chevella_highway: boolean
  bengaluru_highway: boolean
  srisailam_highway: boolean
  nagarjunasagar_highway: boolean
  vijayawada_highway: boolean
  warangal_highway: boolean
  karimnagar_rajiv_rahadari: boolean
  nagpur_highway: boolean
  nanded_highway: boolean
}

interface Seller {
  name: string
  id: number
  is_verified: boolean
  profile_picture: null | string
}

interface CreatedBy {
  id: number
  name: string
}

interface TotalLandSizeInAcres {
  acres: number
  guntas: number
}

interface PricePerAcreCrore {
  crore: number
  lakh: number
}

interface Tag {
  name: string
  slug: string
  tag_type: string
  creator_type: string
  created_at: string
  updated_at: string
}
