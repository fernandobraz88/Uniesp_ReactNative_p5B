import { View, Text,TextInput, Button, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CartoesEstudoContext from '../contexts/CartoesEstudoContext'
import { Picker } from '@react-native-picker/picker'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const EdicaoCartaoScreen = ({route, navigation}) => {

    const {id} = route.params || {}
    const {cartoes, adicionarCartao, atualilizarCartao} = useContext(CartoesEstudoContext)
    const cartao = cartoes.find(c => c.id == id) || {}

    const [titulo,setTitulo] = useState(cartao.titulo || "")
    const [notas,setNotas] = useState(cartao.notas || "")
    const [status,setStatus] = useState(cartao.status || "")

    const [dataTermino,setDataTermino] = useState(cartao.dataTermino ? new Date(cartao.dataTermino) : new Date())
    const [mostraDataPicker, setMostraDataPicker] = useState(false)

    useEffect(()=>{
        if (id) {
            setTitulo(cartao.titulo)
            setStatus(cartao.status)
            setNotas(cartao.notas)
        }
    }, [id, cartao])

    function salvar() {
        const dadosCartao = {titulo, notas, status, dataTermino: dataTermino.toISOString()}
        if (id){
            atualilizarCartao(id, dadosCartao)
        } else {
            adicionarCartao(dadosCartao)
        }

        navigation.goBack()
    }

    function exibirDatapicker(){
        setMostraDataPicker(true)
    }
  
    function ocultarDataPicker(){
        setMostraDataPicker(false)
    }

    function confirmarData(data){
        setDataTermino(data)
        ocultarDataPicker()
    }

    function formatarData(data){
        const dia = data.getDate().toString().padStart(2, '0')
        const mes = (data.getMonth() + 1).toString().padStart(2, '0')
        const ano = data.getFullYear()
        const horas = data.getHours().toString().padStart(2, '0')
        const minutos = data.getMinutes().toString().padStart(2, '0')
        return `${dia}/${mes}/${ano} ${horas}:${minutos}`
    }

  return (
    <View style={styles.container}>
      <Text>EdicaoCartaoScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f4f8',
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    selectedDateLabel: {
        fontSize: 16,
        marginBottom: 15,
        color: '#555',
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#d1d5db',
        padding: 12,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    }
  });

export default EdicaoCartaoScreen