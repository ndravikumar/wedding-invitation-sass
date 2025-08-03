// src/types.ts
export interface Invitation {
  id: number;
  user_id: string;
  created_at: string;
  groom_name: string;
  bride_name: string;
  event_date: string; // You can use Date type if you prefer to handle conversions
//   event_time: string;
  venue_address: string;
  Maps_link?: string; // Optional field
  custom_url_slug: string;
}
