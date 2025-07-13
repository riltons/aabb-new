// Configuração do Supabase
import { createClient } from '@supabase/supabase-js';

// Valores diretos para teste
const supabaseUrl = "https://dlqohrzxvcwmyhykctbo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRscW9ocnp4dmN3bXloeWtjdGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxOTE3MTEsImV4cCI6MjA2Nzc2NzcxMX0.7NZVCWSXuaidVuO_42JKPlXNkAleduXmqan1pEZVKak";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
