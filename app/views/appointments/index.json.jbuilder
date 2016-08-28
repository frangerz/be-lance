json.array!(@appointments) do |appointment|
  json.extract! appointment, :id, :description, :title, :allocated_time, :quote, :alert_at
  json.url appointment_url(appointment, format: :json)
end
