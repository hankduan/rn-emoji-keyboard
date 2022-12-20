import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmojiPicker from 'rn-emoji-keyboard'
import type { EmojiType } from 'src/types'

const Basic = () => {
  const [result, setResult] = React.useState<string>()
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [currentlySelected, setCurrentlySelected] = React.useState<string[]>([])

  const handlePick = (emoji: EmojiType) => {
    console.log(emoji)
    setResult(emoji.emoji)
    setIsModalOpen((prev) => !prev)
    setCurrentlySelected((prev) => [...prev, emoji.name])
  }

  const handleRemoveFromCurrentlySelected = (emoji: EmojiType) => {
    console.log('removed emoji', emoji.name)
    setCurrentlySelected((prev) => prev.filter((a) => a !== emoji.name))
    setResult('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
      <TouchableOpacity onPress={() => setIsModalOpen(true)}>
        <Text style={styles.text}>Open</Text>
      </TouchableOpacity>

      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentlySelectedEmojis={currentlySelected}
        selectedEmojiStyle={styles.selectedEmojiStyle}
        selectedEmojiCallback={handleRemoveFromCurrentlySelected}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    margin: 64,
    fontSize: 18,
  },
  selectedEmojiStyle: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
  },
})

export default Basic
