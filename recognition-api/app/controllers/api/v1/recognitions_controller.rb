class Api::V1::RecognitionsController < ApplicationController
  def index
    @recognitions = Recognition.all

    render json: @recognitions, status: 200
  end

  def show
    @recognition = Recognition.find(params[:id])

    render json: @recognition, status: 200
    # render json: @recognition.to_json(only: [:id, :sender, :content, :employee_id],
    #                           include: [employee: { only: [:name]}])
  end

  def create
    @recognition = Recognition.create(recognition_params)

    render json: @recognition, status: 200
  end

  def update
    @recognition = Recognition.find(params[:id])
    @recognition.update(recognition_params)
    render json: @recognition, status: 200
  end

  def destroy
    @recognition = Recognition.find(params[:id])
    @recognition.delete

    render json: {recognitionID: @recognition.id}
  end

  private

  def recognition_params
    params.require(:recognition).permit(:id, :sender, :content, :employee_id)
  end
end
