json.array!(@charge_rates) do |charge_rate|
  json.extract! charge_rate, :id, :description, :period, :cost
  json.url charge_rate_url(charge_rate, format: :json)
end
