json.array!(@extra_details) do |extra_detail|
  json.extract! extra_detail, :id, :type, :service, :description, :mobile, :home_phone, :alternate_email, :address
  json.url extra_detail_url(extra_detail, format: :json)
end
