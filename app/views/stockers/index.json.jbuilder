json.array!(@stockers) do |stocker|
  json.extract! stocker, :id, :type, :company_name, :abn, :acn, :description
  json.url stocker_url(stocker, format: :json)
end
