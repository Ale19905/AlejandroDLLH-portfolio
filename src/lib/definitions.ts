export interface TelegramGetMeResponse {
  ok: boolean;
  result: {
    ok: boolean;
    result: {
      id: number;
      is_bot: boolean;
      first_name: string;
      username: string;
      can_join_groups: boolean;
      can_read_all_group_messages: boolean;
      supports_inline_queries: boolean;
      can_connect_to_business: boolean;
    }
  } | null,
  error?: any;
}

export interface TelegramSendMessageResponse {
  ok: boolean;
  result: {
    message_id: number;
    from: {
      id: number;
      is_bot: boolean;
      first_name: string;
      username: string;
    },
    chat: {
      id: number;
      first_name: string;
      username: string;
      type: string;
    },
    date: number;
    text: string;
    entities?: {
      offset: number;
      length: number;
      type: string;
    }[];
  } | null;
  error?: any;
}

export interface ContactFormState {
  data: TelegramSendMessageResponse | null;
  zodErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
  message?: string;
  error?: any;
}
