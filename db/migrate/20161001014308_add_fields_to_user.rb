class AddFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :tags, :text, array: true, default: []
  end
end
